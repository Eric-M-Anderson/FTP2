var Email = require('./email');
var e = new Email('testingthings512@gmail.com');

module.exports = class User{
    constructor(m, req){
        this.m = m;
        this.userData = req;
    }

    async verifyHash(collection, hash){
        if(await this.m.isInDB(collection, {hash: hash}) == false){
            this.m.insertItem(collection, {hash: hash});
            return true;
        }else{
            return false;
        }
    }

    async randomHash(collection){
        var hash = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
        var charactersLength = characters.length;
        var digits = 64;
        var combinations = Math.pow(charactersLength, digits);
        var counter = 0;
        while(counter < combinations){
            counter += 1;
            for (var i = 0; i < digits; i++){
                hash += characters[Math.floor(Math.random() * charactersLength)];
            }
            if(await this.verifyHash(collection, hash) == true){
                return hash
            }else{
                hash = '';
            }
        }
        console.log('There are probably no more avalible hashes');
    }

    async newUser(collection){
        if(await this.m.isInDB(collection, {email: this.userData.email}) == false){
            if(this.userData.password == this.userData.cpassword){
                var hash = await this.randomHash('UsedHashes');
                var id = await this.randomHash('UsedIDs');
                if(hash != null){
                    this.userData = Object.assign(this.userData, {hash: hash, verifyed: false, id: id});
                    this.m.insertItem(collection, this.userData);
                    this.m.deleteItem('UserAccount', {email: this.userData.email}, {cpassword: this.userData.cpassword});
                    console.log(this.userData.fname + ' ' + this.userData.lname + '(' + this.userData.email + ') has been successfully added');
                    var html = "<a href='https://127.0.0.1/ecloud/register/" + hash + "'>Verify</a>";
                    //e.sendMessage(this.userData.email, this.userData.fname + ' ' + this.userData.lname + ", Verify your FTP Account", html);
                }else{
                    console.log('A user account cannot be maded at this time. Contact customer support.');
                }
            }else{
                console.log('The password and confirm password do not match');
            }
        }else{
            console.log('A user with ' + this.userData.email + ' already exists');
        }
    }

    async login(collection){
        if(await this.m.isInDB(collection, {email: this.userData.email, password: this.userData.password}) == true){
            console.log('Successful login');
            this.m.updateItem(collection, {email: this.userData.email}, {loggedIn: true});
            return true;
        }else{
            console.log('Account does not exist');
            return false;
        }
    }
}