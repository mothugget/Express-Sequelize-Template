const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize('stuffdb', 'karlfredriksson', '', {
  
  host: 'localhost',

  dialect: 'postgres',
});

const db = {};

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file !== 'index.js') {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  }
}

for (const model in db) {
  if (db[model].associate) db[model].associate(db);
}




db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;