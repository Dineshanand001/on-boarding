const config = require(__dirname + '/../config/mailConfig.json');
var nodeMailer = require('nodemailer');
function triggerMail(sender){
   var transporter = nodeMailer.createTransport({
         host: config.host,
         port: config.port,
         secure: config.secure,
          auth: {
              user: config.auth.user,
              pass: config.auth.pass
          }
      });
      let mailOptions = {
          from: sender+'<svsaurabh97@gmail.com>', // sender address
          to: "saurabhvk@virtusa.com", // list of receivers
          subject: "Test", // Subject line
          text: "Hello", // plain text body
          html:"<b>Test mail sent</b>",
      };

      transporter.sendMail(mailOptions, (error, info) => {
         console.log("send mail called");
          if (error) {
             return console.log(error);
          } else {
             return "success";
          }
       });
       return "success";
}

 function test(){
    console.log(config.host);
 }
module.exports = {test,triggerMail}
