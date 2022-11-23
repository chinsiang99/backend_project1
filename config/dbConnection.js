const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "mysql",
    //    port: 3306,
    host: 'student-mysql.ccttwiegufhh.us-east-2.rds.amazonaws.com',
    database: 'chin_siang',
    user: 'studentmysql',
    password: 'studentmysql'
});