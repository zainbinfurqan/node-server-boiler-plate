const nodemailer = require("nodemailer"),
  { MAILUSER, MAILPASSWORD } = require("../config/keys"),
  mg = require("nodemailer-mailgun-transport"),
  sgMail = require("@sendgrid/mail"),
  keys = require("../config/keys");

/**
 * Send email with code.
 * @param {string} email to which verification email ll send .
 * @param {number} code verification code.
 */

const auth = {
  auth: {
    api_key: "0f2f7ac86d5aab12fd1cc08583c5347b-ed4dc7c4-918d3738",
    domain: "sandboxdc6c434343494c328b3ba1110d2abf29.mailgun.org",
  },
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

exports.sendMail = function (payload) {
  sgMail.setApiKey(keys.SENDGRID_API_KEY);
  const msg = {
    to: payload.to,
    from: "hcms_support@fortewiz.com",
    subject: payload.subject,
    html: payload.html,
  };

  return sgMail.send(msg);
};

exports.sendMailFN = async (emailTo, code, next) => {
  return new Promise((resolve, reject) => {
    sgMail.setApiKey(keys.SENDGRID_API_KEY);
    const msg = {
      to: `${emailTo}`,
      from: "hcms_support@fortewiz.com",
      subject: "verification code email",
      html: `<b>Your registration e-mail verification code ${code}</b>`,
    };
    let response = sgMail.send(msg);
    if (response) {
      resolve(msg);
    }
  });
};

exports.sendMailFN_ = async (code = '', emailFormat = {}, type = '') => {
  return new Promise(async (resolve, reject) => {
    sgMail.setApiKey(keys.SENDGRID_API_KEY);
    const msg = {
      to: `${emailFormat.emailTo}`,
      from: `${emailFormat.emailFrom}`,
      subject: `${emailFormat.heading}`,
      html: `<b>${emailFormat.subHeading} ${emailFormat.Text} ${code}</b>`,
    };
    let response = await sgMail.send(msg);
    if (response) {
      resolve(msg);
    }
  });
}

exports.sendInfoMailFN_ = async (emailFormat = {}, type = '') => {
  return new Promise(async (resolve, reject) => {
    sgMail.setApiKey(keys.SENDGRID_API_KEY);
    const msg = {
      to: `${emailFormat.emailTo}`,
      from: `${emailFormat.emailFrom}`,
      subject: `${emailFormat.heading}`,
      html: `<b>${emailFormat.subHeading} ${emailFormat.Text}</b>`,
    };
    let response = await sgMail.send(msg);
    if (response) {
      resolve(msg);
    }
  });
}