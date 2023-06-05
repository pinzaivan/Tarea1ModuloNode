const {Datatypes} = require("sequelize");
const { db } = require("../database/config");

const User = db.define('users', {
    id:{
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type:Datatypes.INTEGER,
        
    },
    username:{
        tpye:Datatypes.STRING,
        allowNull: false,
    },
    email:{
        type: Datatypes.STRING,
        allowNull: false,
        unique: true

    },
    password:{
        type:Datatypes.STRING,
        allowNull: false,
    },
    role:{
        type:Datatypes.ENUM('client','employee'),
        allowNull: false,
        defaultvalue:"cient",
    },
    status:{
        type: Datatypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
});

module.exports= User