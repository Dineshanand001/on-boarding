'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    clientName: DataTypes.STRING,
    clientLocation: DataTypes.STRING,
    managerId: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.hasMany(models.User,{
      foreignKey :'projectId',
      as: 'users',
   });
  };
  return Project;
};
