const model = require('./db/model');

class Pages {
    static index = async(req , res)=>{
        try{
        const tasks = await model.find()
        res.render("home" , {
            pageTitle: "Home" , tasks
        })
    }
    catch(e){
        res.send(e);
    }

    }

    static add(req , res){
        res.render("add" , {
            pageTitle: "Add Task"
        });
    }

    static addget(req , res){
        res.render("addget" , {
            pageTitle: "Add Get"
        });
    }

    static edit(req, res){
        res.render("edit", {
            pageTitle: "Edit Task",
            id : req.params.id
        });
    }
    
    static showAll(req , res){
        res.render("show-all" , {
            pageTitle: "View Tasks"
        });
    }

}


module.exports = Pages;