const { karya } = require('../models')

module.exports = {

    getAllData: (req, res) => {

        karya.findAll()
        .then((data) => {
            res.status(200).send({
                msg: 'success get all data',
                status: 200,
                data
            })
        })
        .catch((err) => {
            res.status(500).send({
                msg: 'failed get all data',
                status:500,
                err
            })
        })
    },
    postData: (req,res) => {
        const {body} = req;
        const newData = {
            ...body,
            image: req.image.url,
        }
        karya.create(newData)
        .then((data) => {
            res.status(200).send({
                msg: 'success post data',
                status: 200,
                data
            })
        })
        .catch((err) => {
            res.status(500).send({
                msg: 'failed post data',
                status: 500,
                err
            })
        })
    },
    editDataById: (req, res) => {
        const { id } = req.params;
        const { body } = req;
        karya.update(body, {
            where: {id}
        })
        .then((newData) => {
            res.status(200).send({
                msg: 'sucess update data',
                status: 200,
                newData
            })
        })
        .catch((err) => {
            res.status(500).send({
                msg: 'failed update data',
                status: 500,
                err
            })
        })
    },
    deleteData: (req, res) => {
        const {id} = req.params;
        karya.destroy({
            where: {id}
        })
        .then((data) => {
            res.status(200).send({
                msg: 'success delete data',
                status: 200,
                data
            })
        })
        .catch((err, data) => {
            res.status(500).send({
                msg: 'failed delete data',
                status: 500,
                data,
                err,
            })
        })
    }
}