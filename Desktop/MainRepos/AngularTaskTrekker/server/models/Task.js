const {Schema,model} = require('mongoose')


const Task = new Schema({
    title: {
        type: String,
        default: "title"
    },
    description: {
        type: String,
        default: "description"
    },
    creationDate: {
        type: String,
        default: "00.00.00"
    }
})

module.exports = model('Task', Task)