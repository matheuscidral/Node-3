const RepositorioExercicio = require("../repositories/pessoa.js");

const repositorio = new RepositorioExercicio();
class ServicoExercicio {
  async PegarUm(id) {
    if (!id || isNaN(id)) {
      throw new Error("Favor corretamente o id.");
    }
    return repositorio.PegarUm(id);
  }

  async PegarUmPorEmail(email) {
    if (!email.trim()) {
      throw new Error("Preencha o email");
    }
    return repositorio.PegarUmPorEmail(email);
  }

  async PegarTodos() {
    return repositorio.PegarTodos();
  }

  async Adicionar(pessoa, isAdmin = false) {
    if (!pessoa) {
      throw new Error("Favor preencher o pessoa.");
    } else if (!pessoa.nome) {
      throw new Error("Favor preencher o nome.");
    } else if (!pessoa.email) {
      throw new Error("Favor preencher o email.");
    } else if (!pessoa.senha) {
      throw new Error("Favor preencher o senha.");
    }

    return repositorio.Adicionar(pessoa, isAdmin);
  }

  async Alterar(id, pessoa) {
    if (!pessoa) {
      throw new Error("Favor preencher o pessoa.");
    } else if (!pessoa.nome) {
      throw new Error("Favor preencher o nome.");
    } else if (!pessoa.email) {
      throw new Error("Favor preencher o email.");
    } else if (!pessoa.senha) {
      throw new Error("Favor preencher o senha.");
    } else if (!id || isNaN(id)) {
      throw new Error("Favor corretamente o id.");
    }

    return repositorio.Adicionar(pessoa);
  }

  async Deletar(id) {
    if (!id || isNaN(id)) {
      throw new Error("Favor corretamente o id.");
    }

    return repositorio.Deletar(id);
  }
}
module.exports = ServicoExercicio;
