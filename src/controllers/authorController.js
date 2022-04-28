
const AuthorModel = require("../models/authorModel")

const createAuthor = async function (req, res) {
    try {
        let data = req.body
        if (Object.keys(data).length != 0) {
            let savedData = await AuthorModel.create(data)
           return res.status(200).send({ msg: savedData })
        }
        else {
           return res.status(400).send({ msg: "Bad Request" })      // (400) = {the server cannot or will not process the request due to something that is perceived to be a client error}
        }
    }
    catch (err) {
        console.log(err)
       return res.status(500).send({ msg: "error", err: err.message })
    }
}


module.exports.createAuthor = createAuthor
