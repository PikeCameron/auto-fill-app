const express = require("express");
const readline = require("readline");
const Promise = require("bluebird");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const COMMON_NAME_MAPPING = require("./common_name_mapping.js");
const verify = Promise.promisify(require("./scripts/index.js").verify);
const loggerOptions = require("./scripts/logger.js").loggerOptions;
const logger = require("./scripts/logger.js").logger;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(bodyParser.json());

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const options = {
  port: 25,
  concurrency: 1,
  debug: false,
};

// Express route to handle email validation
app.post("/validate-email", async (req, res) => {
  try {
    const email = req.body.email;

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email not provided" });
    }

    const validationResponse = await verify_email_address(email);

    if (validationResponse.success) {
      return res.json({
        success: true,
        message: "Email is valid",
        info: validationResponse.info,
      });
    } else if (validationResponse.message === "Email is accept all") {
      return res.json({
        success: false,
        message: "Email is accept all",
        info: validationResponse.info,
      });
    } else if (validationResponse.message === "Email is blocked") {
      return res.json({
        success: false,
        message: "Email is blocked",
        info: validationResponse.info,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Email validation failed",
        info: validationResponse.info,
      });
    }
  } catch (error) {
    console.error("Error validating email:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

// Express route to handle email prediction and validation
app.post("/predict-emails", async (req, res) => {
  const { firstName, lastName, domain } = req.body;

  if (!firstName || !lastName || !domain) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid request data" });
  }

  try {
    const predictedEmails = await predictEmail(firstName, lastName, domain);
    console.log(predictedEmails);
    const validatedEmails = await validateEmails(predictedEmails);
    res.json({ success: true, emails: validatedEmails });
  } catch (error) {
    console.error("Error predicting and validating emails:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

// EMAIL

function getRandomString(length) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return randomString;
}

async function verify_email_address(email) {
  if (!email) {
    console.log("You must provide an email address.");
    return { success: false, message: "Email not provided" };
  }

  const sender = `sender${getRandomString(8)}@greenbean.org`;
  const fqdn = `mail.${getRandomString(8)}.greenbean.org`;

  const individualOptions = Object.assign(
    { email: email, sender: sender, fqdn: fqdn },
    options
  );

  if (options.debug) {
    loggerOptions.enable();
    logger.info("DEBUG");
    logger.info("OPTIONS: " + JSON.stringify(options));
  }

  try {
    const info = await verify(individualOptions);
    console.log(info);

    if (info.success) {
      const catchEmail = `${getRandomString(8)}@${email.split("@")[1]}`;
      const catchAllOptions = Object.assign(
        { email: catchEmail, sender: sender, fqdn: fqdn },
        options
      );
      const catchInfo = await verify(catchAllOptions);
      if (catchInfo.success) {
        return { success: false, message: "Email is accept all" };
      } else {
        return { success: true, message: "Email validation successful" };
      }
    } else if (info.info.includes("Blocked")) {
      return { success: false, message: "Email is blocked" };
    } else {
      return { success: false, message: "Email validation failed" };
    }
  } catch (error) {
    console.error("Error validating email:", error);
    return { success: false, message: "Internal server error" };
  }
}

// FIND EMAIL

function generateEmailVariations(firstName, lastName, domain) {
  const f = firstName[0].toLowerCase();
  const l = lastName[0].toLowerCase();
  const first = firstName.toLowerCase();
  const last = lastName.toLowerCase();

  const variations = [
    `${first}${last}@${domain}`,
    `${first}@${domain}`,
    `${f}${last}@${domain}`,
    `${last}@${domain}`,
    `${f}${l}@${domain}`,
    `${first}.${last}@${domain}`,
    `${first}_${last}@${domain}`,
  ];

  return variations;
}

async function predictEmail(firstNames, lastNames, domains) {
  const possibleEmails = [];

  for (let i = 0; i < firstNames.length; i++) {
    const firstName = firstNames[i];

    // Check if the first name is in the common name mapping
    const mappedNames = COMMON_NAME_MAPPING[firstName] || [firstName];

    // Iterate over both original and mapped names
    const allFirstNames = [firstName, ...mappedNames];

    for (const currentFirstName of allFirstNames) {
      for (let j = 0; j < lastNames.length; j++) {
        const lastName = lastNames[j];
        const variations = generateEmailVariations(
          currentFirstName,
          lastName,
          domains[0]
        );
        possibleEmails.push(...variations);

        // Try variations with spaces removed
        const currentFirstNameNoSpace = currentFirstName.replace(/\s/g, "");
        const lastNameNoSpace = lastName.replace(/\s/g, "");
        const variationsNoSpace = generateEmailVariations(
          currentFirstNameNoSpace,
          lastNameNoSpace,
          domains[0]
        );
        possibleEmails.push(...variationsNoSpace);

        // Try variations with other first names and spaces removed
        for (let k = i + 1; k < firstNames.length; k++) {
          for (let l = j + 1; l < lastNames.length; l++) {
            const otherFirstName = firstNames[k];
            const otherLastName = lastNames[l];
            const combinedNames = `${currentFirstName}${otherFirstName}`;
            const combinedLastNames = `${lastName}${otherLastName}`;
            const combinedNoSpace = combinedNames.replace(/\s/g, "");
            const combinedLastNoSpace = combinedLastNames.replace(/\s/g, "");
            const combinedVariations = generateEmailVariations(
              combinedNoSpace,
              combinedLastNoSpace,
              domains[0]
            );
            possibleEmails.push(...combinedVariations);
          }
        }
      }
    }
  }

  // Deduplicate the list
  const uniquePossibleEmails = Array.from(new Set(possibleEmails));
  return uniquePossibleEmails;
}
