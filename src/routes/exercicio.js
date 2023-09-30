const express = require("express");
const ControllerExercicios = require("../controllers/exercicio.js");

const controller = new ControllerExercicios();
const router = express.Router();

router.get("/api/pessoa/:id", controller.GetNome);
router.post("/api/pessoa", controller.Add);
router.post("/api/pessoa", controller.GetNomes);
router.put("/api/pessoa/:id", controller.Update);
router.delete("/api/pessoa/:id", controller.Delete);

module.exports = router;
