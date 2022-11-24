const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    // DB_HOST: "127.0.0.1",
    dialect: "mysql",
    host: process.env.HOST,
    // database: process.env.DATABASE,
    // user: process.env.USER,
    // password: process.env.PASSWORD
});

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectDatabase();