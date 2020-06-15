'use strict'

const sequelize = require('./sequenlize')
const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)

const syncronize = async () => {
  fs.readdirSync(__dirname + '/../model')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    require((path.join(__dirname + '/../model', file)))
  })

  const models = sequelize.models;
  Object.keys(models).forEach(name => {
    if ('associate' in models[name]) {
      models[name].associate(models);
    }
  });

  await sequelize.sync({ 
    alter: true 
  })
}

const drop = async () => {
  await sequelize.drop()
}

module.exports = {
  syncronize
}