const Lugar = require("../models/lugar");

const lugarCtrl = {};

lugarCtrl.getLugares = async (req, res, next) => {
    const lugar = await Lugar.find();
    res.json(lugar);
};

lugarCtrl.createLugar = async (req, res, next) => {
    const lugar = new Lugar({
        nombre: req.body.nombre,
        ubicacion: req.body.ubicacion,
        descripcion: req.body.descripcion,
        numeroTelefonico: req.body.numeroTelefonico,
        numeroTelefonico2: req.body.numeroTelefonico2,
        horario: req.body.horario,
        sitioWeb: req.body.sitioWeb,
        ubicacionUrl: req.body.ubicacionUrl
    });
    await lugar.save();
    res.json({ status: "Lugar created" });
};

lugarCtrl.getLugar = async (req, res, next) => {
    const { id } = req.params;
    const lugar = await Lugar.findById(id);
    res.json(lugar);
};

lugarCtrl.editLugar = async (req, res, next) => {
    const { id } = req.params;
    await Lugar.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ status: "Lugar Updated" });
};

lugarCtrl.deleteLugar = async (req, res, next) => {
    await Lugar.findByIdAndRemove(req.params.id);
    res.json({ status: "Lugar Deleted" });
};

module.exports = lugarCtrl;


