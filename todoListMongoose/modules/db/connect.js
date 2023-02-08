const mongoose = require('mongoose');

const dburl = 'mongodb://localhost:27017/toDoList'
try{
mongoose.connect(dburl);
}

catch(e){
console.log(e);
}