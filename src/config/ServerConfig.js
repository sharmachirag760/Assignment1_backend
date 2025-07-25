const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    PORT : process.env.PORT,
    DB_URL: process.env.DB_URL,
    JWT_SECRET : process.env.JWT_SECRET,
    JWT_EXPIRY : process.env.JWT_EXPIRY,
    FRONTEND_URL: process.env.FRONTEND_URL,
    COOKIE_SECURE: process.env.COOKIE_SECURE,
}