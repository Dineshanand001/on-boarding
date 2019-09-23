'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email_id: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    role: DataTypes.STRING,
    project_id: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
