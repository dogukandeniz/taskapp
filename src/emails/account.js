const sgMAil = require('@sendgrid/mail')




sgMAil.setApiKey(process.env.SENDGRID_API_KET)

const sendWelcomeEmail = (email,name) => {

    sgMAil.send({
        to: email,
        from:'deniz.doguka36@gmail.com',
        subject:'This is my first creation',
        text:'I hope this one actually get to you'
})
}

module.exports = {
    sendWelcomeEmail
}