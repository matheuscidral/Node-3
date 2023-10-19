const Pessoa = require("../models/exercicio.js");
const RepostiorieExercicios = require("../repositories/exercicio.js");
const repositorie = new RepostiorieExercicios();

class ServiceExercicios {
  async GetNome(id) {
    return repositorie.GetNome(id);
  }

  async getEmail(email) {
    return repositorie.getEmail(email);
  }

  async GetNomes() {
    return repositorie.GetNomes();
  }

  async Add(pessoa) {
    if (!pessoa) {
      throw new Error("Nenhuma pessoa encontrada!");
    } else if (!pessoa.nome) {
      throw new Error("Nenhum nome encontrado!");
    } else if (!pessoa.email) {
      throw new Error("Nenhum email encontrado!");
    } else if (!pessoa.senha) {
      throw new Error("Nenhuma senha encontrado!");
    }

    return repositorie.Add(pessoa);
  }

  async Update(id, pessoa) {
    if (!id) {
      throw new Error("Nenhum identificador encontrado!");
    }
    if (!pessoa) {
      throw new Error("Nenhuma pessoa encontrada!");
    } else if (!pessoa.nome) {
      throw new Error("Nenhum nome encontrado!");
    } else if (!pessoa.email) {
      throw new Error("Nenhum email encontrado!");
    } else if (!pessoa.senha) {
      throw new Error("Nenhuma senha encontrado!");
    }

    return repositorie.Update(id, pessoa);
  }

  async Delete(id) {
    if (id < 0 || isNaN(id) || id > this.PegarTodos().length) {
      throw new Error("Favor preencher corretamente o id");
    }

    return repositorie.Delete(id);
  }
}

module.exports = ServiceExercicios;
