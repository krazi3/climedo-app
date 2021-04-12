const router = require('express').Router();
const { department, sequelize } = require('../models');

router.get('/', async (req, res, next) => {
  const { q = '' } = req.query;

  try {
    const departments = await sequelize.query(`SELECT d.id, d.data FROM departments d WHERE d.data::TEXT ILIKE '%${q}%' AND d."deletedAt" is NULL`,
      { type: sequelize.QueryTypes.SELECT });

    res.json(departments);
  }
  catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  const data = req.body;
  
  try {
    const dep = await department.create({
      data
    });

    res.json(dep);
  }
  catch (err) {
    next(err);
  }
});

router.get(':/departmentId', (req, res) => {
  if (req.dep) {
    res.json(req.dep)
  }
  // next(NotFound());
});

router.put('/:departmentId', async (req, res, next) => {
  const { body: data, dep } = req;

  try {
    await dep.update({
      data,
    });
  }
  catch (err) {
    next(err);
  }
});

router.param('departmentId', async (req, res, next) => {
  const { departmentId: id } = req.params;
  
  try {
    const dep = await department.findOne({
      where: {
        id,
      },
    });

    req.dep = dep;
  }
  catch (err) {
    next(err);
  }
});

module.exports = router;
