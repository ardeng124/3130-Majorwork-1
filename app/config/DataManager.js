import { memo } from "react/cjs/react.production.min";


export default class DataManager {

    users = 
    [{
        "email":"1@1.com",
        "password":"12345",
        "name":"Arden"
        }
    ]

    memories = 
    [{
        id: "1",
        email:"1@1.com",
        title:"Highway image",
        date:"20/3/2004",
        category:"Photography",
        image: {uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"},
    }, 
    {
        id:"2",
        email:"1@1.com",
        title:"Birdy image",
        date:"20/3/2004",
        category:"Nature",
        image: {uri:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"},
    }]

    static myInstance = null;
    userEmail = "";
    userName = "";
    currentUser ={};
    static getInstance(){
        if (DataManager.myInstance == null) {
            DataManager.myInstance = new DataManager();
        }
        return this.myInstance
    }Y

    getUser(email) {
        return this.users.find((user) => user.email === email)
    }

    validateUser({email, password}) {
        return this.users.filter((user) => user.email === email && user.password === password).length >0
    }

    getUserEmail() {
        return this.userEmail
    }
    getCurrentUser(){
        return this.users.find((user) => user.email === this.userEmail)
    }
    setUser(email){
        this.currentUser = this.getUser(email);
        this.userEmail = email
    }

    createNewUser({email,name,password}) {
        this.users.push({
            "email":email,
            "name":name,
            "password":password
        })
    }

    getMemories(email){
        return this.memories.filter((memory) =>memory.email == email)
    }
    deleteMemory(id) {
        this.memories = this.memories.filter(memory => memory.id !== id)
    }

    updateMemory(id, newMemory) {
        memoryToUpdate = this.memories.filter((memory) => memory.id === id)
        memoryToUpdate = newMemory
    }
}