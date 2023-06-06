const {DataTypes} = require("sequelize");
const { db } = require("../database/config");

const Repair = db.define('repairs', {
    id:{
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type:DataTypes.INTEGER,
        
    },
    date:{
        type:DataTypes.DATE,
        allowNull: false,
    },
    status:{
        type: DataTypes.ENUM('pending','completed','canceled'),
        allowNull: false,
        defaultValue:'pending',
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports= Repair