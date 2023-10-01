

const getAllTasks = (req, res) => {
    res.send('Get all tasks')
}

const createTask = (req, res) => {
    res.json(req.body)
    //res.json('Create tasks here')
}

const getTask = (req, res) => {
    res.json({ id: req.params.id })
    //res.send('Get Single Task')
}

const updateTask = (req, res) => {
    //res.json({ id: req.params.id })
    res.send('Update Single Task')
}

const deleteTask = (req, res) => {
    res.send('Delete Single Task')
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}