var userModels = require('../Models/UserModels')

var userControllers = {
    home: async function (req, res) {
        const query = await userModels.find()
        res.status(200).send(
            query
        )
    }
}

module.exports = userControllers