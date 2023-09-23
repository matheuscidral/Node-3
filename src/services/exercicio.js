const RepositoryExercicio = require("../repositories/exercicio.js");

const repositorio = new RepositoryExercicio();

class ServicoExercicio {
  PegarUm(index) {
    return repositorio.PegarUm(index);
  }

  PegarTodos() {
    return repositorio.PegarTodos();
  }

  Add(nome) {
    if (!nome) {
      throw new Error("Favor preencher nome!");
    }
    repositorio.Add(nome);
  }

  Alterar(index, nome) {
    if (!nome) {
      throw new Error("Favor preencher nome!");
    } else if (!index || isNaN(index)) {
      throw new Error("Favor preencher corretamente o index!");
    }
    repositorio.Add(nome);
  }
}

module.exports = ServicoExercicio;
