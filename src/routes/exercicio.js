const express = require("express");
const ControllerExercicios = require("../controllers/exercicio.js");
const authMiddleware = require("../middleware/auth.js");

const controller = new ControllerExercicios();
const router = express.Router();

router.get("/api/pessoa/:id", authMiddleware, controller.GetNome);
router.post("/api/pessoa", authMiddleware, controller.Add);
router.post("/api/login", controller.Login);
router.post("/api/pessoa", authMiddleware, controller.GetNomes);
router.put("/api/pessoa/:id", authMiddleware, controller.Update);
router.delete("/api/pessoa/:id", authMiddleware, controller.Delete);

module.exports = router;
