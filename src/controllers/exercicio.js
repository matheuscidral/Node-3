const ServiceExercicios = require("../services/exercicio.js");
const service = new ServiceExercicios();
const bcrypt = require("bcrypt");
const config = require("../config.js");

class ControllerExercicios {
  async Login(req, res) {
    const { email, senha } = req.body;

    const { dataValues: pessoa } = await service.GetEmail(email);

    if (!email || !senha) {
      return res.status(401).json({ message: "Email ou senha inválido" });
    }
    if (!pessoa) {
      return res.status(401).json({ message: "Email ou senha inválido" });
    }
    if (!(await bcrypt.compare(senha, pessoa.senha))) {
      pessoa.senha == senha;
    }

    const token = jwt.sign(
      {
        id: pessoa.id,
        email: pessoa.email,
        nome: pessoa.nome,
      },
      config.secret
    );

    res.json({
      token: "",
    });
  }

  async GetNome(req, res) {
    try {
      const resultado = await service.GetNome(req.params.id);
      res.status(200).json({
        pessoa: resultado,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error,
      });
    }
  }

  async Add(req, res) {
    try {
      const resultado = await service.Add(req.body.pessoa);
      res.status(201).json({
        pessoa: resultado,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error,
      });
    }
  }

  async GetNomes(_, res) {
    try {
      const resultado = await service.GetNomes();
      res.status(200).json({
        pessoa: resultado,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error,
      });
    }
  }

  async Update(req, res) {
    try {
      const resultado = await service.Update(req.body.id, req.params.pessoa);
      res.status(200).json({
        pessoa: resultado,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error,
      });
    }
  }

  async Delete(req, res) {
    try {
      const resultado = await service.Delete(req.params.id);
      res.status(204).json({
        pessoa: resultado,
      });
    } catch {
      console.log(error);
      res.status(500).json({
        message: error,
      });
    }
  }
}

module.exports = ControllerExercicios;
