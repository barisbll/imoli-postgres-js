const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const People = sequelize.define("people", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = People;
