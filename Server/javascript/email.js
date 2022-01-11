const nodemailer = require('nodemailer');
const {google} = require('googleapis');

module.exports = class Email{
    constructor(email){
        this.email = email;
        this.clientId = '1043271763265-88rj0h06650er93365noci7q1ejfh38n.apps.googleusercontent.com';
        this.clientSecret = '-pam8YlAXBbPlv8WD0vwqOmH';
        this.refreshToken = '1//04CIOH6YyXZ9gCgYIARAAGAQSNwF-L9Irf0Q2ghcG5vN7hFhcdOfVLk---fIfrYVNIx1TlUcvRjM4jEoco1WEO3cLzVzOhRrM3qQ';
        this.OAuth2 = google.auth.OAuth2;
        this.OAuth2_client = new this.OAuth2(this.clientId, this.clientSecret);
        this.OAuth2_client.setCredentials({refresh_token: this.refreshToken});
    }

    sendMessage(to, subject, html){
        const accessToken = this.OAuth2_client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: this.email,
                clientId: this.clientId,
                clientSecret: this.clientSecret,
                refreshToken: this.refreshToken,
                accessToken: accessToken
            }
        });

        var mailOptions = {
            from: `The FTP Website <${this.email}>`,
            to: to,
            subject: subject,
            html: html
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}
