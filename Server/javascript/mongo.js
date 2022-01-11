module.exports = class Mongo{
    constructor(url, database){
        this.link = url + database;
        const MongoClient = require('mongodb').MongoClient;
        this.client = new MongoClient(this.link);
        this.MongoDBConnect();
        this.db = this.client.db();
    }

    async MongoDBConnect(){
        try {
            await this.client.connect();
        } catch (e) {
            console.error(e);
        }
    }

    returnDB(){
        return this.db;
    }
      
    async isInDB(collection, item){
        try {
            var data = await this.db.collection(collection).findOne(item);
        } catch(e) {
            console.error(e);
        }
        if(data == null){
            return false;
        }else{
            return true;
        }
    }

    async getDoc(collection, item){
        try {
        var data = await this.db.collection(collection).findOne(item);
        } catch(e) {
            console.error(e);
        }
        return data;
    }

    insertItem(collection, item){
        this.db.collection(collection).insertOne(item);
    }

    updateItem(collection, searchParm, item){
        this.db.collection(collection).updateOne(searchParm, {$set: item});
    }

    deleteItem(collection, searchParm, item){
        this.db.collection(collection).updateOne(searchParm, {$unset: item});
    }

    deleteDoc(collection, item){
        this.db.collection(collection).deleteOne(item);
    }

    async pullCollection(collection){
        try {
            var data = await this.db.collection(collection).find().toArray();
            } catch(e) {
                console.error(e);
            }
            return data;
    }

}