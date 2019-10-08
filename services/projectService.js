const sequelize = require('../models').sequelize;
const projectCodeQuery = process.env.projectCodeQuery;
async function projectByCode(code) {
   console.log("Exe called");
   var res;
try{
   await new Promise((resolve, reject) =>{
      sequelize.query(projectCodeQuery,
      { replacements: [code], type: sequelize.QueryTypes.SELECT })
      .then(projects => {
         console.log(projects[0].name);
         res = projects[0].clientName;
         resolve()
      }).catch(error => { res = error;
         reject(error)})
   })
//try{
//await promise
}catch(err){
   console.log(err);
}
console.log("Completed");
return res
}
module.exports = {projectByCode}
