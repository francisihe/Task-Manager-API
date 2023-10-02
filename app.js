const express = require('express')
const app = express();

// Require DB file and ENV file
const connectDB = require('./db/connect')
require('dotenv').config() // to access the env variables


/* --- Import Routes --- */
const tasksRouter = require('./routes/tasks')

/* --- Setup middleware --- */
app.use(express.json()) // Use JSON in response


/* --- Routes --- */
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasksRouter)


{/* --- --- Port & Start Function to Connect to DB--- --- */ }
const port = 3000


const start = async () => {

    // Defined these in the .env file
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;
    const databaseName = process.env.MONGODB_DATABASE;
    
    const url = `mongodb+srv://${username}:${password}@nodeexpressprojecttaskm.k6ifkqd.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

    try {
        await connectDB(url)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
