'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Budget extends Model {
    static associate(models) {
    }
  };
  Budget.init({
    text: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    type: DataTypes.ENUM('income', 'expense')
  }, {
    sequelize,
    modelName: 'Budget',
  });
  return Budget;
};