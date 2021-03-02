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
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        checkValidIncomeOrExpense() {
          if (this.type === 'expense' && this.amount > 0) {
            throw new Error('input dengan type expense harus minus (-)');
          } else if (this.type === 'income' && this.amount < 0) {
            throw new Error('input dengan type income harus plus (+)');
          }
        }
      }
    },
    type: {
      type: DataTypes.ENUM,
      values: ['income', 'expense'],
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Budget',
  });
  return Budget;
};