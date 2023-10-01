const express = require('express')
const app = express();

{/* --- Import Routes --- */}
const tasksRouter = require('./routes/tasks')

{/* --- Setup middleware --- */}
app.use(express.json()) // Use JSON in response


{/* --- Routes --- */}
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasksRouter)


{/* --- --- Port --- --- */}
const port = 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})