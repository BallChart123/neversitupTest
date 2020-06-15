'use strict'
const DataTypes = require('sequelize/lib/data-types')
const Sequelize = require('../config/sequenlize')
const Product = require('./productModel')

const Order = Sequelize.define('order', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.fn('uuid_generate_v4')
  },
  orderId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  customerId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  activeStatus: {
    type : DataTypes.ENUM('ACTIVE', 'DISABLE', 'DELETED'),
    allowNull: false,
    defaultValue: 'ACTIVE'
  },
  orderType : DataTypes.STRING,
  customerName : DataTypes.STRING,
  description : DataTypes.STRING,
  createdBy: DataTypes.STRING,
  updatedBy: DataTypes.STRING,
},{
  tableName: 'order',
  comment: ''
})

Order.hasMany(Product, {
    as : 'requests',
    foreignKey: {
      name: 'orderId'
    },
    onUpdate: 'CASCADE'
  })
  Product.belongsTo(Order, {
    as : 'products',
    foreignKey: {
      name: 'orderId'
    },
    onUpdate: 'CASCADE'
  })
  

module.exports = Order
