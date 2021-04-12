# Climedio App

## Setting the Database

You need to have Postgres DB to run this project. Open the `config/config.json` file and add the database credentials.

```
{
  "development": {
    "username": "postgres",
    "password": 123,
    "database": "climedo",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

After that we can use sequelize to create the databse and the run the seeders and migrations. To do that just run `npm run migrate`

To run this app run `npm i` and then `npm start`