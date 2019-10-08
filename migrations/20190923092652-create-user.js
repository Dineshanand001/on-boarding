'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      emailId: {
        type: Sequelize.STRING,
        unique:true
      },
      contactNumber: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      autoPass: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      role: {
        type: Sequelize.STRING,
      },
      projectId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:{
           model: 'Projects',
           key: 'id',
           as:'projectId',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
},
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
