const db = require('../models/index');

module.exports = {
  listData(req, res) {
    return db.Budget.findAll()
    .then(result => {
      res.status(200).send({
        status: 'ok!',
        totalResults: result.length,
        error: null,
        data: result
      });
    }).catch(err => {
      res.status(400).send({
        status: 'bad request',
        error: err
      });
    });
  },

  createData(req, res) {
    return db.Budget.create({
      text: req.body.text,
      amount: req.body.amount,
      type: req.body.type
    }).then(result => {
      res.status(200).send(result);
    }).catch(err => {
      res.status(500).send({
        status: 'error',
        name: req.body.name,
        error: err
      });
    });
  },

  updateData(req, res) {
    return;
  },

  deleteData(req, res) {
    return;
  }
};