const express = require("express");
const router = express.Router();

const lugar = require("../controllers/lugares.controller");

router.get("/", lugar.getLugares);

router.post("/", lugar.createLugar);

router.get("/:id", lugar.getLugar);

router.put("/:id", lugar.editLugar);

router.delete("/:id", lugar.deleteLugar);

module.exports = router;