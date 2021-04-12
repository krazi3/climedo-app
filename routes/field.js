const router = require('express').Router();
const { field } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    const fields = await field.findAll({
      
    });

    res.json(fields);
  }
  catch (err) {
    next(err);
  }
});

module.exports = router;
