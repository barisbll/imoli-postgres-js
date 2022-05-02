const Sequelize = require("sequelize");

const sequelize = new Sequelize("imoli_postgres", "barisbll", "postgresql", {
  dialect: "postgres",
  host: "localhost",
});

module.exports = sequelize;
