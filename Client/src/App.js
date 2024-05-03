import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [domain, setDomain] = useState("");
  const [data, setData] = useState(null);

  const handleVerify = async () => {
    console.log("Email:", email);

    try {
      const response = await fetch("http://localhost:5000/validate-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const responseData = await response.json();
      console.log(responseData);
      setData(responseData);
      if (responseData.success) {
        console.log("Email is valid");
      } else if (responseData.message === "Email is accept all") {
        console.log("Email is accept all");
      } else if (responseData.message === "Email is blocked") {
        console.log("Email is blocked");
      } else {
        console.log("Email validation failed");
      }
    } catch (error) {
      console.error("Error calling validate-email endpoint:", error);
    }
  };

  const handlePredictEmails = async () => {
    try {
      const response = await fetch("http://localhost:5000/predict-emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, domain }),
      });
      console.log(
        "First: ",
        firstName,
        "\nLast: ",
        lastName,
        "\nDomain: ",
        domain
      );

      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error calling predict-emails endpoint:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "domain") {
      setDomain(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const validationMessageStyle = {
    fontSize: "14px",
    color:
      data && data.success
        ? "green"
        : data &&
          (data.message === "Email is accept all" ||
            data.message === "Email is blocked")
        ? "orange"
        : "red",
  };

  return (
    <div className="App containerStyle">
      <header>
        <h1>Test Automation</h1>
      </header>

      {/* Personal Information */}
      <div className="sectionStyle">
        <h2>Personal Information</h2>
        <div className="flexContainer">
          <div className="flexItem">
            <label className="labelStyle">First Name</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_firstName"
              name="firstName"
              onChange={handleInputChange}
            />
          </div>
          <div className="flexItem">
            <label className="labelStyle">Last Name</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_lastName"
              name="lastName"
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label className="labelStyle">Company Name</label>
          <input
            className="inputStyle"
            type="text"
            id="waterFall_companyName"
          ></input>
        </div>
        <div className="flexContainer">
          <div className="flexItem">
            <label className="labelStyle">Phone Number</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_phoneNumber"
            ></input>
          </div>
          <div className="flexItem">
            <label className="labelStyle">Email</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <button className="buttonStyle" onClick={handleVerify}>
              Verify
            </button>
            <button className="buttonStyle" onClick={handlePredictEmails}>
              Predict Email
            </button>
            {data && ( // Render validation message if data exists
              <p className="validationMessage" style={validationMessageStyle}>
                {data.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Additional Personal Information */}
      <div className="sectionStyle">
        <div className="flexContainer">
          <div className="flexItem">
            <label className="labelStyle">LinkedIn</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_linkedin"
            ></input>
          </div>
          <div className="flexItem">
            <label className="labelStyle">Facebook</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_facebook"
            ></input>
          </div>
          <div className="flexItem">
            <label className="labelStyle">X (Twitter)</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_twitter"
            ></input>
          </div>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label className="labelStyle">Job Title</label>
          <input
            className="inputStyle"
            type="text"
            id="waterFall_jobTitle"
          ></input>
        </div>
        <div className="flexContainer">
          <div className="flexItem">
            <label className="labelStyle">Personal Emails</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_personalEmails"
            ></input>
          </div>
          <div className="flexItem">
            <label className="labelStyle">Other Phone Numbers</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_otherPhoneNumbers"
            ></input>
          </div>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label className="labelStyle">Address</label>
          <input
            className="inputStyle"
            type="text"
            id="waterFall_address"
          ></input>
        </div>
      </div>

      {/* Company Information */}
      <div className="sectionStyle">
        <h2>Company Information</h2>
        <div style={{ marginBottom: "10px" }}>
          <label className="labelStyle">LinkedIn</label>
          <input
            className="inputStyle"
            type="text"
            id="waterFall_jobCompanyLinkedin"
          ></input>
        </div>
        <div className="flexContainer">
          <div className="flexItem">
            <label className="labelStyle">Street Address</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_jobCompanyLocationStreetAddress"
            />
          </div>
          <div className="flexItem">
            <label className="labelStyle">City</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_jobCompanyLocationCity"
            ></input>
          </div>
        </div>
        <div className="flexContainer">
          <div className="flexItem">
            <label className="labelStyle">State</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_jobCompanyLocationState"
            ></input>
          </div>
          <div className="flexItem">
            <label className="labelStyle">Zip Code</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_jobCompanyZipCode"
            ></input>
          </div>
          <div className="flexItem">
            <label className="labelStyle">Country</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_jobCompanyCountry"
            ></input>
          </div>
        </div>
        <div className="flexContainer">
          <div className="flexItem">
            <label className="labelStyle">Website</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_website"
            ></input>
          </div>
          <div className="flexItem">
            <label className="labelStyle">Domain</label>
            <input
              className="inputStyle"
              type="text"
              id="waterFall_domain"
              name="domain"
              onChange={handleInputChange}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
