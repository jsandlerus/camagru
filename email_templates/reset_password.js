const reset_password = token => {
    return `
    <!DOCTYPE html>
    <html style="margin: 0; padding: 0;">

        <head>
            <title>Reset Password</title>
        </head>

        <body style="margin: 0; padding: 0;">
            <br/>
            <br/>
            <div>Click in the following link to reset your password</div>
            <a href="https://reactiongifme.herokuapp.com/reset/${token}">Reset Password</a>
            <br/>
            <br/>
        </body>
    </html>`
    ;
};

module.exports = {reset_password}; 