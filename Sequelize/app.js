const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "postgres://admin:admin@127.0.0.1:5432/nodejs_test"
);

const User = sequelize.define("user", {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

User.findAll().then(user => console.log(user));
