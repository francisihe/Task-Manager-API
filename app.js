const express = require('express')
const app = express();

{/* --- Route --- */}
app.get('/', (req, res) => {
    res.send('Task Manager App')
})



{/* --- --- Port --- --- */}
const port = 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})