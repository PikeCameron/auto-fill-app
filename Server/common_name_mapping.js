const COMMON_NAME_MAPPING = {
  robert: ["bob", "rob"],
  bob: ["robert"],
  richard: ["rich"],
  richard: ["dick"],
  rich: ["richard"],
  dick: ["rich"],
  matthew: ["matt"],
  matt: ["matthew"],
  alexander: ["alex"],
  alexandra: ["alex"],
  alexandra: ["allie"],
  alexandra: ["ali"],
  abigail: ["abby"],
  abigail: ["abbie"],
  abby: ["abigail"],
  abbie: ["abigail"],
  abraham: ["abe"],
  abe: ["abraham"],
  andrew: ["andy"],
  andy: ["andrew"],
  anthony: ["tony"],
  tony: ["anthony"],
  arnold: ["arnie"],
  arnie: ["arnold"],
  barbara: ["barb"],
  barb: ["barbara"],
  bartholomew: ["barry"],
  barry: ["Bartholomew"],
  benjamin: ["ben"],
  ben: ["benjamin"],
  benedict: ["ben"],
  bradley: ["brad"],
  brad: ["bradley"],
  brentley: ["brent"],
  brent: ["brentley"],
  callum: ["cal"],
  calvin: ["cal"],
  cameron: ["cam"],
  cam: ["cameron"],
  carolyn: ["lynn", "carol"],
  lynn: ["carolyn"],
  cassandra: ["cassie", "sandy"],
  cassie: ["cassandra"],
  catherine: ["cat", "kate", "kathy"],
  charles: ["charlie", "chuck"],
  christian: ["chris"],
  kristian: ["kris"],
  chris: ["christian"],
  kris: ["kristian"],
  christine: ["christy"],
  christy: ["christine"],
  clayton: ["caly"],
  clinton: ["clint"],
  clint: ["clinton"],
  cole: ["colton", "colby"],
  colton: ["cole"],
  curtis: ["curt"],
  curt: ["curtis"],
  cynthia: ["cindy"],
  cindy: ["cynthia"],
  damian: ["ian"],
  ian: ["damian"],
  daniel: ["dan", "danny"],
  dan: ["daniel"],
  danny: ["daniel"],
  daniella: ["danielle", "danni"],
  danielle: ["danni", "dani"],
  danni: ["daniella", "danielle"],
  david: ["dave"],
  dave: ["david"],
  deborah: ["deb", "debbie"],
  deb: ["deborah"],
  debbie: ["deborah"],
  demetrius: ["dimitri"],
  dimitri: ["demetrius"],
  dennis: ["denny"],
  denny: ["dennis"],
  dolores: ["dee"],
  dee: ["dolores"],
  dominic: ["dom", "nick"],
  dom: ["dominic", "dominick", "dominik"],
  nick: ["dominic", "dominick", "dominik"],
  dominick: ["dom", "nick"],
  dominik: ["dom", "nick"],
  donald: ["don", "donny"],
  don: ["donald"],
  donny: ["donald"],
  dorothea: ["dorothy"],
  dorothy: ["dolly", "dory", "dora"],
  dolly: ["dorothy"],
  dory: ["dorothy"],
  dora: ["dorothy"],
  douglas: ["doug"],
  doug: ["douglas"],
  donovan: ["donny"],
  donny: ["donald", "donovan"],
  edmund: ["ed", "eddy", "ned"],
  edward: ["ed", "eddy", "ned"],
  edwin: ["ed", "eddy", "eddie", "ned"],
  eleanor: ["ella", "elle", "ellie", "nell", "nellie", "nora"],
  ellen: ["nell", "nellie", "ellie"],
  elizabeth: [
    "betty",
    "beth",
    "betsy",
    "eliza",
    "elise",
    "elsa",
    "elsie",
    "ellie",
    "ella",
    "lisa",
    "lily",
    "lizzy",
    "lizzie",
    "liz",
  ],
  emily: ["em", "emmy", "emma", "ellie"],
  florence: ["flora", "flo"],
  frances: ["fran", "franny", "fanny", "frankie"],
  francesca: ["fran", "franny", "fanny"],
  francesco: ["fran", "frank", "frankie"],
  francis: ["fran", "frank", "franky"],
  franklin: ["frank", "franky"],
  frederick: ["fred", "freddy", "eric", "erick", "rick", "ricky"],
  fredrick: ["fred", "freddy", "rick"],
  gabriel: ["gabe"],
  gabriella: ["gabby"],
  gabrielle: ["gabby"],
  garfield: ["gary", "garry"],
  geoffrey: ["geoff", "jeff"],
  georgina: ["gina"],
  gerald: ["gerry"],
  gilbert: ["gil", "gib", "bert"],
  gregory: ["greg", "gregg"],
  gustav: ["gus"],
  gwendolyn: ["gwen", "gwendy"],
  gustavo: ["gus"],
  hannah: ["anna", "ann", "annie"],
  harold: ["harry"],
  harris: ["harry"],
  harrison: ["harris", "harry"],
  harry: ["hank", "hanky"],
  henry: ["hank", "harry"],
  herbert: ["bert"],
  howard: ["howie"],
  jackson: ["jack"],
  jacob: ["jake"],
  jacoby: ["coby"],
  jacqueline: ["jackie"],
  james: ["jim"],
  jamie: ["jim"],
  janet: ["jan", "jane"],
  janice: ["jan", "jane"],
  jasmin: ["jazz", "jaz"],
  jason: ["jay", "jase", "jake"],
  jaxon: ["jack"],
  jaxson: ["jack"],
  jayden: ["jay"],
  jayson: ["jay"],
  jeffrey: ["jeff"],
  jeff: ["jeffrey"],
  jennifer: ["jen", "jenny", "jenni"],
  jeremiah: ["jeremy"],
  jeremy: ["jerry"],
  jerome: ["jerry"],
  jessica: ["jess", "jessie"],
  jimmy: ["jim"],
  johnathan: ["nathan", "john", "johnny"],
  jonathan: ["jon", "john", "jonny", "johnny", "nathan"],
  joseph: ["joe", "joey"],
  josephine: ["jo", "josie"],
  joshua: ["josh"],
  judith: ["judy", "jude"],
  julian: ["jules"],
  juliana: ["julie", "jude"],
  kathleen: ["kathy", "kat", "katie", "kate"],
  kenneth: ["ken", "kenny"],
  kevin: ["ken", "kenny"],
  kimberly: ["kim", "kimmy"],
  laurence: ["larry"],
  lawrence: ["larry"],
  leonard: ["len", "lenny", "leon", "leo", "lee"],
  leonardo: ["len", "lenny", "leon", "leo", "lee"],
  lillian: ["lil", "lilly"],
  linda: ["lynn", "lindy"],
  louis: ["lou", "louie"],
  louisa: ["louise"],
  lucas: ["luke"],
  lukas: ["luke"],
  lucille: ["lucy"],
  mackenzie: ["kenzie"],
  madeline: ["maddie", "magdaline", "mads"],
  maddison: ["maddie"],
  marcus: ["marc", "mark"],
  margaret: ["peg", "peggy", "daisy", "maggie", "marge", "meg", "megan"],
  maria: ["mary", "marie"],
  marianna: ["marianne"],
  marianne: ["maria", "mary"],
  marie: ["mary"],
  marion: ["mario"],
  markus: ["marc", "mark"],
  martin: ["marty"],
  marvin: ["marv"],
  mathew: ["matt", "matty"],
  matthew: ["matt", "matty"],
  maxim: ["max", "maxmillion"],
  maximilian: ["max"],
  maxwell: ["max"],
  megan: ["meg"],
  melinda: ["mel", "linda"],
  melissa: ["mel", "lissa", "missy"],
  michael: ["mike"],
  mitchell: ["mitch"],
  natasha: ["nat"],
  nathan: ["nat", "nate"],
  nathaniel: ["nat", "nathan", "nate"],
  nicole: ["niki", "nicki", "nicky", "nikki"],
  nicholas: ["nick"],
  nichole: ["nickie", "nicki", "nikki"],
  nickolas: ["nick", "nicky"],
  norbert: ["bert", "burt", "bob"],
  norman: ["norm"],
  oliver: ["ollie", "olly"],
  olivia: ["ollie", "liv"],
  olive: ["liv", "oliver"],
  oswald: ["ozzy", "oz"],
  pamela: ["pam"],
  patricia: ["pat", "patty", "tricia", "trish", "trisha"],
  patrick: ["pat"],
  penelope: ["penny"],
  percival: ["percy"],
  peregrine: ["perry"],
  peter: ["pete"],
  philip: ["phil"],
  phillip: ["phil"],
  phil: ["philip"],
  quincy: ["quinn"],
  quinton: ["quinn"],
  rachel: ["rach"],
  randolph: ["randy"],
  raphael: ["ralph"],
  raymond: ["ray"],
  rebecca: ["becky", "becca", "bec"],
  regina: ["gina"],
  roberta: ["bobbie"],
  robinson: ["robin", "robert", "rob"],
  roderick: ["rod", "eric", "rick"],
  rodney: ["rod"],
  rodrick: ["rod"],
  rodrigo: ["rod"],
  ronald: ["ron"],
  roxanne: ["roxy", "roxie"],
  russell: ["russ", "rusty"],
  sara: ["sarah"],
  sabrina: ["sab"],
  salvador: ["sal"],
  samantha: ["sam", "sammy"],
  samuel: ["sam", "sammy"],
  sandra: ["sandy"],
  sebastian: ["seb"],
  sidney: ["sid", "syd"],
  spencer: ["spence"],
  stanley: ["stan"],
  stellaluna: ["stella", "luna"],
  stephanie: ["steph", "stephie"],
  stephen: ["steph", "steve"],
  steven: ["steve"],
  summer: ["sum"],
  susan: ["sue", "susie", "suzy"],
  sydney: ["sid", "syd"],
  tamara: ["tammy", "tam"],
  tamsin: ["tammy", "tam"],
  terence: ["terry"],
  teresa: ["tracy", "tracey", "terry", "teri"],
  terrance: ["terry"],
  terrence: ["terry"],
  theodore: ["ted", "teddy", "ed", "eddy", "ned", "neddy", "theo"],
  theresa: ["tracy", "tracey", "terry", "teri"],
  thomas: ["tom", "tommy"],
  tiana: ["tia"],
  tiffany: ["tiff"],
  timothy: ["tim", "timmy"],
  tobias: ["toby"],
  tomas: ["tom", "tommy"],
  trenton: ["trent"],
  tyler: ["ty"],
  tyrone: ["ty"],
  tyson: ["ty"],
  valentine: ["val"],
  victor: ["vic", "vicky"],
  victoria: ["vicky", "tory", "vick", "vicki"],
  vincent: ["vince", "vin"],
  violet: ["vi"],
  violeta: ["violet", "viola"],
  virginia: ["gina", "ginny"],
  vivian: ["viv"],
  valentina: ["tina", "val"],
  wallace: ["walt", "wally", "wal"],
  walter: ["walt", "wally", "wal"],
  wilbur: ["will"],
  wendy: ["wen", "wendi"],
  wesley: ["wes"],
  william: ["will", "willy", "bill", "billy", "liam"],
  woodrow: ["woody"],
  yvonne: ["yo", "von"],
  zacarias: ["zachary", "zach"],
  zachariah: ["zachary", "zach"],
  zacharias: ["zachary", "zack", "zach"],
  zachary: ["zac", "zach", "zack", "zak"],
  zach: ["zachary"],
  zack: ["zackary"],
  zoe: ["zoey"],
};
module.exports = COMMON_NAME_MAPPING;