const model = require('./db/model');

/*const heads = [
    {key:"id",default: Date.now()}, 
    {key:"title", default:null},
    {key: "acontent", default:null}, 
    {key:"dueDate", default:null}, 
    {key:"status", default: false}]*/

class User{

static addUser = async(req , res)=>{
    try{
        const task = new model(req.body)
        await task.save()
        res.redirect("/")
    }
    catch(err){
        res.send(err.message)
    }
}


static del = async(req , res)=>{
    try{
        const result = await model.findByIdAndRemove(req.params.id);
        res.redirect("/");
    }
    catch(err){
            res.send(err.message)
        }
}
    

static showOne = async(req , res)=>{
    try{
        const result = await model.findById(req.params.id);
        res.render("show-single" , {
            pageTitle: "View Single Task", result
        });
    }
    catch(err){
            res.send(err.message)
        }
}

static update = async(req, res)=>{
    try{
        const result = await model.findByIdAndUpdate(req.params.id , req.body , {runValidators : true});
        res.redirect("/");
    }
    catch(err){
            res.send(err.message)
        }
    }

static change = async(req , res)=>{
    try{
        const result = await model.findById(req.params.id);
        result.status = !result.status;
        await result.save();
        res.redirect("/");
        
        }
    catch(err){
            res.send(err.message)
        }
    }
}


module.exports = User;
