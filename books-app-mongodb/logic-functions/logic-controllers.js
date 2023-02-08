const dataDealer = require("./helpers/data-dealer");
const connection = require("./helpers/db-connection");
const {ObjectId} = require("mongodb");

class Logic {
    static homePage(req , res){
        connection(db=>{
            db.collection("books").find().toArray((error , result) => {
                 if(error) console.log(error.message)
                 res.render("home" , {
                     pageTitle: "Home" , result , books: result.length
                 })
            })
         })
    }
    
        

    static addPage(req , res){
        res.render('add' , {pageTitle : "Add Book"});
    }

    static editPage(req , res){
        res.render('edit' , {pageTitle : "Edit Book" , id : req.params.id});
    }


    static search(req , res){
        connection(db=>{
            console.log(req.query.searchedName);
            db.collection("books").find().toArray((error , result) => {
                if(error) console.log(error.message)
                result = result.filter( e => e.bookTitle.toLowerCase().includes(req.query.searchedName.toLowerCase()) )
                res.render("search" , {
                    pageTitle: "Search" , result , books: result.length
                })
        })
    })
    }
    
    static addBook(req , res){
        const book = req.body;
       connection(db=>{
        db.collection("books").insertOne(book)
        .then(r=>  res.redirect("/"))
        .catch(err => res.send(err))
       })
    }
    
    static deleteBook(req, res) {
        connection(db=>{
            db.collection("books").deleteOne({_id: ObjectId(req.params.id)});
            res.redirect("/");
        })
    }

    static editBook(req , res){
        connection(db=>{
            db.collection("books").updateOne({_id: ObjectId(req.params.id)} , {$set: req.body})
            res.redirect('/');
        })
        
        }

       
    
    
}


module.exports = Logic;
