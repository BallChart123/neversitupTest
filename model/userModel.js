'use strict';
const DataTypes = require('sequelize/lib/data-types')
const Sequelize = require('../config/sequenlize')
const Order = require('./orderModel')
const User = Sequelize.define('user', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.fn('uuid_generate_v4')
  },
  activeStatus: {
    type : DataTypes.ENUM('ACTIVE', 'DISABLE', 'DELETED'),
    allowNull: false,
    defaultValue: 'ACTIVE'
  },
  username: DataTypes.STRING,
  englishTitle: DataTypes.STRING,
  thaiTitle: DataTypes.STRING,
  englishFirstName: DataTypes.STRING,
  englishLastName: DataTypes.STRING,
  englishNickName: DataTypes.STRING,
  thaiFirstName: DataTypes.STRING,
  thaiLastName: DataTypes.STRING,
  thaiNickName: DataTypes.STRING,
  mail: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  extension: DataTypes.STRING,
  department: DataTypes.STRING,
  position: DataTypes.STRING,
  remark: DataTypes.STRING,
  createdBy: DataTypes.STRING,
  updatedBy: DataTypes.STRING,
  createdDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedDate: DataTypes.DATE,
}, {
  comment: '',
  tableName: 'user'
});
User.hasMany(Order, {
  as : 'users',
  foreignKey: {
    name: 'customerId'
  },
  onUpdate: 'CASCADE'
})

module.exports = User;