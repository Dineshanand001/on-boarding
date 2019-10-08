const config = require(__dirname + '/../config/mailConfig.json');
var nodeMailer = require('nodemailer');
//const managerMail =require(__dirname + '/../templates/managerEmail.ejs');
function triggerMail(options){
   var transporter = nodeMailer.createTransport({
         host: config.host,
         port: config.port,
         secure: config.secure,
          auth: {
              user: config.auth.user,
              pass: config.auth.pass
          }
      });
      console.log(options);      
      let mailOptions = {
          from: (options.sender||'New Resource Login Request')+'<svsaurabh97@gmail.com>', // sender address
          to: options.email, // list of receivers
          subject: "Test", // Subject line
          text: "Hello", // plain text body
          html:"<b>Test mail</b>",
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
