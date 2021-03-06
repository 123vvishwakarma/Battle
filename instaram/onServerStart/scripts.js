const csv=require('csvtojson');

module.exports = function (app) {
    const csvFilePath='/instaram/instaram/file/battles.csv';
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        let collection = app.schema.battles;
        jsonObj.forEach(object => {
            app.crud.createDocument(object, collection, function(err, doc) {
                if(err){
                    console.log("Error in saving doc : ",err)
                }else{
                    console.log("Doc inserted");
                }
            });
        });
    });
     
    const jsonArray= csv().fromFile(csvFilePath);
}