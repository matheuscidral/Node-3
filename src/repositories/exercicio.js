const Pessoa = require("../models/exercicio.js");
const bcrypt = require("bcrypt");

class RepostiorieExercicios {
  async GetNome(id) {
    return Pessoa.findOne({
      where: { id },
    });
  }

  async GetEmail(email) {
    return Pessoa.findOne({
      where: { email },
    });
  }

  async GetNomes() {
    return Pessoa.findAll();
  }

  async Add(pessoa) {
    const hashSenha = bcrypt.hash(pessoa.senha, 10);

    const result = await Pessoa.create(
      {
        ...pessoa,
        senha: hashSenha,
      },
      { transaction }
    );

    return Pessoa.create(pessoa);
  }

  async Update(pessoa) {
    return Pessoa.update(pessoa, {
      where: { id },
    });
  }

  async Delete(id) {
    return Pessoa.destroy({
      where: { id },
    });
  }
}

module.exports = RepostiorieExercicios;
