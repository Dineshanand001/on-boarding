const config = require(__dirname + '/../config/mailConfig.json');
var nodeMailer = require('nodemailer');
var fs = require('fs');
var template = fs.readFileSync(__dirname + '/../templates/managerEmail.html',{encoding:'utf-8'});
var ejs = require('ejs');
function triggerMail(options){
   console.log(options.body.emailId);
   var values = {hlink:""+process.env.HOST,endpoint:"/api/user/activate/"+options.body.emailId,name:options.body.firstName+" "+options.body.lastName}
   const renderedMail = ejs.render(template,values);
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
          from: ('New Resource Login Request')+'<svsaurabh97@gmail.com>', // sender address
          to: options.query.email, // list of receivers
          subject: "Test", // Subject line
          text: "", // plain text body
          html: renderedMail,
      }
     transporter.sendMail(mailOptions, (error, info) => {
         console.log("send mail called");
          if (error) {
             return console.log(error+'\n Info ->'+info);
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
