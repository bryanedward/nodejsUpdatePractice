const chalk = require('chalk');
const mongoose = require('mongoose')
const app = require('./App')
const config = require('./Config')

async function main() {
    // connect to database
    try {
        await mongoose.connect(config.MONGODB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(() => {
                app.listen(config.PORT)
                console.log(chalk.bold.blue(`connect to ${config.PORT} !!`))
            })
    } catch (error) {
        console.log(chalk.bold.red(error));
    }
}

main()



