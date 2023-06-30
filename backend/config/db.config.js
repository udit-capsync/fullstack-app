// module.exports = {
//     HOST: "localhost",
//     USER: "postgres",
//     PASSWORD: "postgres",
//     DB: "postgres",
//     dialect: "postgres",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };
const Sequelize = require('sequelize');


const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;

