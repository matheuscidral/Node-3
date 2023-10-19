const { Sequelize } = require("sequelize");
const { development } = require("./config");
const sequelize = new Sequelize(development);

sequelize
  .sync()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });

module.exports = sequelize;
