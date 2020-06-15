'use strict'
const DataTypes = require('sequelize/lib/data-types')
const Sequelize = require('../config/sequenlize')

const Product = Sequelize.define('product', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.fn('uuid_generate_v4')
  },

  productType : DataTypes.STRING,
  productName : DataTypes.STRING,
  description : DataTypes.STRING,
  createdBy: DataTypes.STRING,
  updatedBy: DataTypes.STRING,
},{
  tableName: 'product',
  comment: ''
})

module.exports = Product
