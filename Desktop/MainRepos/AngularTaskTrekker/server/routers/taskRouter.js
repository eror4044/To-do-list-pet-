const Router = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const router = new Router()
const taskController = require('../controllers/taskController')
router.post('/createTask',authMiddleware, taskController.createTask)
router.get('/tasks',authMiddleware, taskController.getTasks)
router.delete(`/tasks/:id`,authMiddleware, taskController.deleteTask)

module.exports = router