const mongoose = require('mongoose');
const dburl = 'mongodb://localhost:27017/toDoList';
mongoose.connect(dburl);
const task = new mongoose.model("Task" , {
    title:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    content:{
        type:String,
        required:true,
        trim:true,
    },
    dueDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    status:{
        type: Boolean,
        default:false
    }

})

module.exports = task;