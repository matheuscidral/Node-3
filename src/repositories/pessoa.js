const Pessoa = require("../models/pessoa.js");

class RepositorioExercicio {
  async PegarUm(id) {
    return Pessoa.findOne({
      where: {
        id,
      },
    });
  }

  async PegarUmPorEmail(email) {
    return Pessoa.findOne({
      where: {
        email,
      },
    });
  }

  async PegarTodos() {
    return Pessoa.findAll();
  }

  async Adicionar(pessoa, isAdmin = false) {
    const senha = await bcrypt.hash(pessoa.senha, 10);

    return Pessoa.create({ ...pessoa, senha, permissao: isAdmin ? 0 : 1 });
  }

  async Alterar(id, pessoa) {
    return Pessoa.update(pessoa, {
      where: {
        id,
      },
    });
  }

  async Deletar(id) {
    return Pessoa.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = RepositorioExercicio;
