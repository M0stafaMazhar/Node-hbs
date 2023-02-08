const fs = require('fs');
const path = require('path');


const dataDir = path.join(__dirname, '../../data/data.json');


class DataDealer {

    static readData (){
        let data
        try{
            data = JSON.parse(fs.readFileSync(dataDir))
        }
        catch(e){
            data = []
        }   
        return data
    }

    static writeData (data){
        fs.writeFileSync(dataDir, JSON.stringify(data));
    }

}



module.exports = DataDealer;
