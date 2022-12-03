'use strict';

module.exports = (sequelize, DataTypes) => {
    const Stuff = sequelize.define('Stuff', {
        stufftype: DataTypes.STRING,
        stuffgood: DataTypes.BOOLEAN,
        stuffamount: DataTypes.BIGINT
    });
    return Stuff;
};