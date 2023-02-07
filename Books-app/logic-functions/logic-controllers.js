const dataDealer = require("./helpers/data-dealer");


class Logic {
    static homePage(req , res){
        const data = dataDealer.readData();
        res.render('home' , {pageTitle:"Home" , data});
    }
        

    static addPage(req , res){
        res.render('add' , {pageTitle : "Add Book"});
    }

    static editPage(req , res){
        res.render('edit' , {pageTitle : "Edit Book" , id : req.params.id});
    }


    static search(req , res){
        const searchedName = req.query.searchedName;
        const data = dataDealer.readData();
        const newData = data.filter(book => book.bookTitle.toLowerCase().includes(searchedName) );
        res.render('search' , {pageTitle : "Search Results" , result: newData.length ,newData});

    }

    static showBook(req , res){
        res.render('show' , {pageTitle : req.params.title});
    }
    
    static addBook(req , res){
        const data = dataDealer.readData();
        const book = {id: Date.now() , status: false , ...req.body};
        data.push(book);
        dataDealer.writeData(data)

        res.redirect("/default");
    }
    
    static deleteBook(req, res) {
        console.log(req.params.id);
        const data = dataDealer.readData();
        const userIndex = data.findIndex(user => user.id == req.params.id)
        if (userIndex == -1) res.redirect("/error");
        else data.splice(userIndex, 1);
             dataDealer.writeData(data);
             res.redirect('/default');
    }

    static editBook(req , res){
        const id = req.params.id;
        const data = dataDealer.readData();
        const userIndex = data.findIndex(user => user.id == id);
        data[userIndex] = {id : id , ...req.body};
        dataDealer.writeData(data);
        res.redirect('/default');
        }
    
   static sort(req , res){
        const data = dataDealer.readData();
        const books = data.length;
        const sortBy = req.params.sortBy;
        if(sortBy == "default"){
        res.render('home' , {pageTitle : "Home" , books , data:data});
        }

        else if(sortBy == "pages"){
            const pageSortedData = data.sort((a,b) => {
                return a.pagesNum - b.pagesNum});
            res.render('home' , {pageTitle : "Home" , books , data : pageSortedData});   
        }

        else if(sortBy == "name"){
            const nameSortedData = data.sort((a, b) =>{
                const name1 = a.bookTitle.toUpperCase();
                const name2 = b.bookTitle.toUpperCase();
                if (name1 < name2) {
                    return -1;
                  }
                else if (name1 > name2) {
                    return 1;
                  }
                  return 0;
            })

            res.render('home' , {pageTitle : "Home" , books , data : nameSortedData});   
        }
    }


       
    
    
}


module.exports = Logic;
