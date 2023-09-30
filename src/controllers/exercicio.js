const ServiceExercicios = require("../services/exercicio.js");
const service = new ServiceExercicios();

class ControllerExercicios {
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
