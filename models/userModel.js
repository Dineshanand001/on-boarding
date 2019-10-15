'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailId: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    autoPass: DataTypes.BOOLEAN,
    LDAPEntry:DataTypes.BOOLEAN,
    role: DataTypes.STRING,
    projectId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Project,{
      foreignKey:'projectId',
      onDelete:'CASECADE',
   });
  };
  return User;
};
