const ServicoExercicio = require("../services/ex");

const servico = new ServicoExercicio();

class ControllerExercicio {
  PegarUm(req, res) {
    try {
      const index = req.Params.index;

      const result = servico.PegarUm(index);
      res.status(200).json({
        nome: result,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao pegar nome" });
    }
  }

  PegarTodos(req, res) {
    try {
      const result = servico.PegarTodos();

      res.status(201).json({
        nomes: result,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar nomes" });
    }
  }

  Adicionar(req, res) {
    try {
      const nome = req.body.nome;

      servico.Adicionar(nome);
      res.status(201).json({ message: "Adicionado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao adicionar" });
    }
  }

  Alterar(req, res) {
    try {
      const index = req.params.index;
      const nome = req.body.nome;

      servico.Alterar(index, nome);

      res.status(200).json({ message: "Alterado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao alterar" });
    }
  }
}

module.exports = ControllerExercicio;
