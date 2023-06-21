require('dotenv').config()

const JWT_SECRET_KEY=process.env.JWT_SECRET_KEY

const SMTP_NAME=process.env.SMTP_NAME
const SMTP_PASSWORD=process.env.SMTP_PASSWORD
const CLIENT_URL=process.env.CLIENT_URL


module.exports={JWT_SECRET_KEY,SMTP_NAME,SMTP_PASSWORD,CLIENT_URL}