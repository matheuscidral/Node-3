const nomes = Array("Bénado", "Pédrini", "Réfê");

class RepositoryExercicio {
  PegarUm(index) {
    return nomes[index];
  }

  PegarTodos() {
    return nomes;
  }

  Add(nome) {
    nomes.push(nome);
  }

  Alterar(index) {
    nomes[index] = nome;
  }

  Deletar(index) {
    nomes.splice(index, 1);
  }
}

module.exports = RepositoryExercicio;
