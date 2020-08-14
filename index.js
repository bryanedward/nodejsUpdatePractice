const chalk = require('chalk');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./App')
dotenv.config();

async function main() {
    // connect to database
    try {
        await mongoose.connect(process.env.MONGOOSE,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(() => {
                app.listen(process.env.PORT)
                console.log(chalk.bold.blue(`connect to ${process.env.PORT} !!`))
            })
    } catch (error) {
        console.log(chalk.bold.red(error));
    }
}

main()
