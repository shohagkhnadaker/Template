
const nodemailer = require('nodemailer');
const { SMTP_NAME, SMTP_PASSWORD } = require('../config/secret');


// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: SMTP_NAME, // generated ethereal user
    pass: SMTP_PASSWORD, // generated ethereal password
  },
});


const emailWithNODEmail=async(sendMail)=>{
    try {
        const info = await transporter.sendMail({
            from: SMTP_NAME, // sender address
            to: sendMail.email, // list of receivers
            subject:sendMail.subject, // Subject line
            html:sendMail.html, // html body
          });
console.log('message send:%s',info);


    } catch (error) {
        console.log("error is occoure when send mail",error);
        throw error
    }
}
module.exports=emailWithNODEmail