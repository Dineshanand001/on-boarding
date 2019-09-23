'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    client_name: DataTypes.STRING,
    client_location: DataTypes.STRING,
    manager_id: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};