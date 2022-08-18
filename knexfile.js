// Update with your config settings.

module.exports = {

    development: {
      client: 'mysql',
      connection: {
        database: 'car_rental',
        user:     'root',
        password: 'Root@1234'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        directory: './src/database/migrations'
      },
    }
  
  };
  