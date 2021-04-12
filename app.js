const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./models');

const fieldRouter = require('./routes/field');
const departmentRouter = require('./routes/department');

const app = express();

// set application port
app.set('port', process.env.PORT || '3000');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/field', fieldRouter);
app.use('/department', departmentRouter);

const init = async () => {
  console.log('Checking database connection...');
  try {
    await sequelize.authenticate();
    console.log('Connection to database successful!');
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }

  app.listen(app.get('port'), () => {
    console.log(`App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
    console.log('Press CTRL-C to stop');
  });
}

// start the http server
init();
