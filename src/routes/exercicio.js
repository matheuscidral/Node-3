const express = require("express");
const ControllerExercicio = require("../controllers/exercicios");

const controller = new ControllerExercicio();
const router = express.Router();

router.get("/api/nome/:index", controller.PegarUm);
router.get("/api/nomes", controller.PegarTodos);
router.post("/api/nome", controller.Adicionar);
router.put("/api/nome/:index", controller.Alterar);
router.delete("/api/nome/:index", controller.Deletar);

module.exports = router;
