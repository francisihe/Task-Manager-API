const mongoose = require('mongoose')


const connectDB = (url) => {
    
    return mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('CONNECTED TO DATABASE..'))
        .catch((err) => console.log(err))
}

module.exports = connectDB