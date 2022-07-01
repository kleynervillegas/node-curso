import Task from '../../models/tasks/Task';

export const create = async (req, res) => {

    if(!req.body.title){ return res.status(400).send({message:"content cannot be emty"})}
    try {
        const createTask = new Task({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done,
        })
        const seveTask = await createTask.save();
        res.json({ massage: 'saving a new task', seveTask: seveTask })
    } catch (error) {
        console.log(error.massage);
        res.status(500).json({
            massage: error.massage || "something goes creating a task",
        })
    }
}

export const getAll = async (req, res) => {
    try {
        const Tasks = await Task.find();
        res.send(Tasks);
    } catch (error) {
        res.status(500).json({
            massage: error.massage || 'something goes wrong retrieving the tasks',
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.send(task);
    } catch (error) {
        res.status(500).json({
            massage: error.massage || `error ${req.params.id}`,
        })
    }
}

export const deleteTask = async (req, res) => {
    try {
        const deleteTask = await Task.findByIdAndDelete(req.params.id);
        res.send(deleteTask);
    } catch (error) {
        console.error(error);
    }
}

export const updateTask = async (req, res) => {
    try {
        const updateTask = await Task.findByIdAndUpdate(req.params.id, req.params.body);
        res.send(updateTask);
    } catch (error) {
        res.status(500).json({
            massage: error.massage || `error ${req.params.id}`,
        })
    }
}