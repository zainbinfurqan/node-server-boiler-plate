const keys = {
  PORT: process.env.PORT,
  SALT: Number(process.env.SALT),
  JWT_SECRET: process.env.JWT_SECRET,
  // MONGO_URI__: process.env.MONGO_URI,
  // MONGO_URI___: process.env.MONGO_URI_P,
  ACCOUNTSID: process.env.ACCOUNTSID,
  AUTHTOKEN: process.env.AUTHTOKEN,
  MAILUSER: process.env.MAILUSER,
  MAILPASSWORD: process.env.MAILPASSWORD,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  CLOUDNARYACCOUNTNAME: process.env.CLOUDNARYACCOUNTNAME,
  CLOUDNARY_API_KEY: process.env.CLOUDNARY_API_KEY,
  CLOUDNARY_API_SECRET: process.env.CLOUDNARY_API_SECRET,
};

if (process.env.NODE_ENV === "development") {
  keys["MONGO_URI"] = process.env.MONGO_URI;
}
if (process.env.NODE_ENV === "production") {
  keys["MONGO_URI"] = process.env.MONGO_URI_P;

}

module.exports = keys;
