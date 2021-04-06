const  {foods} = require("../models/");

module.exports = {
    getAllfoods : (req, res)=>{
        foods.findAll()
        .then((data)=>{
            res.send({
                msg: "berhasil menampilkan",
                status: 200,
                data
            });
        })
        .catch ((err)=>{
            res.send({
                msg:"error",
                status: 500,
                err,
            });
        });
    },
    postFoods : (req, res)=>{
        let {body} = req;
        foods.create(body)
        .then((data)=>{
            res.status(200).send({
                msg: "berhasil menambah data",
                status: 200,
                data,
            });
        })
        .catch((err)=>{
            res.status(500).send({
                msg: "data gagal ditambahkan",
                status: 500,
                err,
            });
        });
    },
    getDataById : (req, res)=>{
        let {id} = req.params;
        foods.findOne({
            where : {id}
        })
        .then((data)=>{
            res.status(200).send({
                msg: "data ditemukan",
                status: 200,
                data,
            });
        })
        .catch((err)=>{
            res.status(500).send({
                msg: "gagal menemukan data",
                status: 500,
                err,
            });
        });
    },
    deleteFoods : (req, res)=>{
        let {id} = req.params;
        foods.destroy({
            where : {id}
        })
        .then((data)=>{
            res.status(200).send({
                msg: "berhasil menghapus data",
                status: 200,
                data,
            });
        })
        .catch((err)=>{
            res.status(500).send({
                msg: "gagal menghapus data",
                status: 500,
                err,
            });
        });
    },
    updateFoods : (req, res)=>{
        let {id} = req.params;
        let {body} = req;
        foods.update(body, {
            where : {id}
        })
        .then((data)=>{
            res.status(200).send({
                msg: "berhasil mengupdate data",
                status: 200,
                data,
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg: "gagal mengupdate data",
                status: 500,
                err,
            })
        })
    },
};