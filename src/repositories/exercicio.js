const Pessoa = require("../models/exercicio.js");

class RepostiorieExercicios {
  async GetNome(id) {
    return Pessoa.findOne({
      where: { id },
    });
  }

  async GetNomes() {
    return Pessoa.findAll();
  }

  async Add(pessoa) {
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
