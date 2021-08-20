const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: '47da8d27101cf7',
        pass: '6531e1b72a1009' 
    }
});

const mailOptions = {
    from: '"Test Server" <nodejs_teste@example.com>',
    to: "nodeteste@mailinator.com",
    subject: "Email Test",
    text: "This is an email test using Mailtrap.io"
};

const sendEmail = () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId)
    })
}

module.exports = { sendEmail }