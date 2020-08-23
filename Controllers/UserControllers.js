var userModels = require('../Models/UserModels')

var userControllers = {
    home: async function (req, res) {
        const query = await userModels.find()
        res.status(200).send(
            query
        )
    },
    view: function (req, res) {
        res.send('hola mundo')
    }
}

module.exports = userControllers