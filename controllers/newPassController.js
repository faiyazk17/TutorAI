const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const changePassRequest = async(req, res) =>{
    const { email } = req.body;

    // Check if email is in database
    if(!email) return res.status(400).json({'message': 'Email required'});
    const foundUser = usersDB.users.find(person => person.email === email);
    if(!foundUser) return res.sendStatus(401);

    // Create one time link valid for 15 mins
    const secret = process.env.RESET_TOKEN_SECRET + foundUser.password;
    const payload = {
        email: email,
        username: foundUser.username
    }

    const token = jwt.sign(payload, secret,{expiresIn: '15m'})
    const link = `${Process.env.BASE_URL}/reset-password/${foundUser.username}/${token}`


    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    });
    const mailOptions = {
        from: "help@TutorAI.ca",//WILL PROBABLY NEED TO CHANGE
        to: email,
        subject: "Password reset request",
        html: `<p>Click the following link to reset your password:</p><a href="${link}">${link}</a>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).send("Failed to send reset link");
        }
        console.log(`Password reset link sent to ${email}`);
        return res.status(200).send("Reset link sent");
      });
}


const verifySecret = async (req, res) => {
    const { username, token } = req.params;
    const foundUser = usersDB.users.find((person) => person.email === username);
    if (!foundUser) return res.sendStatus(401);
    const secret = process.env.RESET_TOKEN_SECRET + foundUser.password;
  
    try {
      const payload = jwt.verify(token, secret);
      // if the payload is verified, allow the user to reset their password
      res.status(200).send("Token verified. User can reset password");
    } catch (error) {
      // if there is an error, the token is invalid
      res.sendStatus(401);
    }
  };

module.exports = { changePassRequest };