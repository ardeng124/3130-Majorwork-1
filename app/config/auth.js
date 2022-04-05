import DataManager from "./DataManager"

export {getUser, validateUser, createNewUser, getCurrentUserName}

data = DataManager.getInstance();
users = data.users

function getUser(email) {
    return users.find((user) => user.email === email)
}   

function validateUser({email, password}) {
    return users.filter((user) => user.email === email && user.password === password).length >0
}

function createNewUser({email, name, password}) {
    data.createNewUser(email,name,password);
}

function getCurrentUserName() {
    return data.getCurrentUser()
}