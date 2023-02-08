const fs = require('fs');
const path = require('path');

class dealer{
    static readData(){
        const data = JSON.parse(fs.readFileSync(path.join(__dirname ,"../data/data.json")));
        return data;
    }

    static writeData(data){
        fs.writeFileSync(path.join(__dirname ,"../data/data.json"), JSON.stringify(data));
    }
}

module.exports = dealer;