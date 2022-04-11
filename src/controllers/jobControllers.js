const { job } = require('../models')

module.exports = {

    getAll: (req, res) => {

        job.findAll()
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
        job.create(body)
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

    editData: (req, res) => {
        const { id } = req.params;
        const { body } = req;
        job.update(body, {
            where: {id}
        })
        .then((data) => {
            res.status(200).send({
                msg: 'success update data',
                status: 200,
                data
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
        const { id } = req.params;
        job.destroy({
            where: {id}
        })
        .then((data) => {
            res.status(200).send({
                msg: 'success delete data',
                status: 200,
                data
            })
        })
        .catch((err) => {
            res.status(500).send({
                msg: 'success delete data',
                status: 500,
                err
            })
        })
    }
}