

export default class DataManager {

    users = 
    [{
        "email":"1@1.com",
        "password":"12345",
        "name":"Arden"
        }
    ]

    static myInstance = null;
    userEmail = "";
    userName = "";
    static getInstance(){
        if (DataManager.myInstance == null) {
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance
    }

    getUserEmail() {
        return this.userEmail
    }
    getCurrentUser(){
        return this.userName
    }

    createNewUser({email,name,password}) {
        users.push({
            "email":email,
            "name":name,
            "password":password
        })
    }
}