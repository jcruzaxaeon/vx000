// ./api/services/email.js

import sgMail from '@sendgrid/mail';


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendResetEmail = async (email, token) => {
    const encodedEmail = encodeURIComponent(email);
    const msg = {
        to: email,
        from: 'support@axaeon.com',
        subject: 'Password Reset Request',
        text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
               Please click on the following link, or paste this into your browser to complete the process:\n\n
               ${process.env.APP_URL}/reset-password/${token}?email=${encodedEmail}\n\n
               If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    try {
        await sgMail.send(msg);
        console.log('Password reset email sent successfully');
    } catch (error) {
        console.error('Error sending password reset email:', error);
        if (error.response) {
            console.error(error.response.body);
        }
        throw error;
    }
};