const config = require('./config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.database.database, config.database.user, config.database.password, {
  host: config.database.host,
  dialect: 'postgres',
  timezone: '+07:00',
  logging: true,
  define: {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'createdDate',
    updatedAt: 'updatedDate',
    underscored: true,
  },
});

module.exports = sequelize;