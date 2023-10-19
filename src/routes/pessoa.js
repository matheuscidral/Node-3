const express = require("express");
const ControllerExercicio = require("../controllers/pessoa.js");
const authMiddleware = require("../middleware/auth.js");

const router = express.Router();

const controllers = new ControllerExercicio();

router.post("/api/login", controllers.Login);
router.post("/api/signin", controllers.Adicionar);
router.get("/api/pessoas/", authMiddleware, controllers.PegarTodos);
router.get("/api/pessoa/:id", authMiddleware, controllers.PegarUm);
router.post("/api/pessoa", authMiddleware, controllers.AdicionarAdmin);
router.put("/api/pessoa/:id", authMiddleware, controllers.Alterar);
router.delete("/api/pessoa/:id", authMiddleware, controllers.Deletar);

module.exports = router;
