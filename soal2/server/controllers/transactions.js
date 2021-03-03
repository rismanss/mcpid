const db = require('../models/index');

module.exports = {
  listData(req, res) {
    return db.Budget.findAll()
      .then((result) => {
        res.status(200).send({
          status: 'ok!',
          totalResults: result.length,
          error: null,
          data: result,
        });
      })
      .catch((err) => {
        res.status(400).send({
          status: 'bad request',
          error: err,
        });
      });
  },

  getBalance(req, res) {
    return db.Budget.findAll({
      where: {
        type: 'income',
      },
    }).then((income) => {
      let totalIncome = 0;
      let totalExpense = 0;
      for (let i = 0; i < income.length; i++) {
        totalIncome += income[i].amount;
      }

      db.Budget.findAll({
        where: {
          type: 'expense',
        },
      }).then((expense) => {
        for (let j = 0; j < expense.length; j++) {
          totalExpense += expense[j].amount;
        }

        const result = totalIncome + totalExpense; 

        res.status(200).send({result: result})
      }).catch((error) => {
        res.send(error);
      });
    }).catch((err) => {
      res.send(err);
    });
  },

  createData(req, res) {
    return db.Budget.create({
      text: req.body.text,
      amount: req.body.amount,
      type: req.body.type,
    })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(500).send({
          status: 'error',
          name: req.body.name,
          error: err,
        });
      });
  },

  updateData(req, res) {
    return res.send({ message: 'transaksi harusnya tidak bisa update' });
  },

  deleteData(req, res) {
    return res.send({ message: 'belum dibuat controller' });
  },
};
