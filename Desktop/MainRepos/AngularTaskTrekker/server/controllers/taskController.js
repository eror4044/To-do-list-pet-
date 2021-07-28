const Task = require('../models/Task')

class taskController{
    async getTasks(req,res){
        try {
            const tasks = await Task.find()
            return res.json(tasks) 
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'something went wrong'})
        }
    }
    async createTask(req,res){
        try {
            const {title, description} = req.body;
            let creationDate = new Date()
            const task = new Task({title, description,creationDate})
            await task.save()
            return res.json({message: "Task Created"})        
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'something went wrong error'})
        }
    }
    async deleteTask(req,res){
        try {
            await Task.deleteOne(Task.findById(req.params.id))
            return res.json({message: `Task by id: ${req.params.id} was deleted`})        
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'something went wrong'})
        }
    }
}
module.exports = new taskController()