const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
});