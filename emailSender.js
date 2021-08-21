const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: '47da8d27101cf7',
        pass: '6531e1b72a1009' 
    }
})

const mailOptions = {
    from: '"Test Server" <nodejs_teste@example.com>',
    to: "nodeteste@mailinator.com",
    subject: "Email Test",
    text: "This is an email test using Mailtrap.io"
}

// totalOnlyProducts: Somente os produtos //
// totalProducts: Total de produtos, inclui produtos e seus subprodutos //
const sendEmail = (totalOnlyProducts, totalProducts) => {
    console.log('Total de produtos e subprodutos:' + totalProducts)
    console.log('Total somente de produtos:' + totalOnlyProducts)
    mailOptions.text = "Total de produtos e subprodutos (inclui produtos e seus subprodutos): totalProducts: " + totalProducts + " | " +
                       "Total somente de produtos: " + totalOnlyProducts

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Message sent: %s', info.messageId)
        console.log('--Email Enviado--')
        console.log('--Finalizado--')
    })
}

module.exports = { sendEmail }