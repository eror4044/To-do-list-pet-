const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routers/authRouter')
const taskRouter = require('./routers/taskRouter')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)
app.use("/task", taskRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://admin:admin@cluster0.gzhbj.mongodb.net/ToDoListMain?retryWrites=true&w=majority`).then(()=>{console.log("mongo conntcted");})
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
 
start()