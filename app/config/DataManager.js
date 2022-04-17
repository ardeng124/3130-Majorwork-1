import { memo } from "react/cjs/react.production.min";


export default class DataManager {
    users = [
        {
            email: "1@1.com",
            password: "12345",
            name: "Arden",
        },
    ]

    memories = [
        {
            id: "1",
            email: "1@1.com",
            title: "Highway image",
            date: "20/3/2004",
            category: "Photography",
            image: {
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
            },
        },
        {
            id: "2",
            email: "1@1.com",
            title: "Birdy image",
            date: "20/3/2004",
            category: "Nature",
            image: {
                uri: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
            },
        },
        {
            id: "3",
            email: "1@1.com",
            title: "Tree",
            date: "15/7/2020",
            category: "Nature",
            image: {
                uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            },
        },
        {
            id: "4",
            email: "1@1.com",
            title: "A plant",
            date: "15/7/2020",
            category: "Nature",
            image: {
                uri: "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80",
            },
        },
        {
            id: "5",
            email: "1@1.com",
            title: "Cityscape",
            date: "5/4/1970",
            category: "Urban",
            image: {
                uri: "https://cdn.vox-cdn.com/thumbor/CRqJoRaVIKgea8ySXvbzJm19n7A=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13335435/NorthBroadSt_Landscape_1_M.Edlow.jpg",
            },
        },
    ]

    static myInstance = null
    userEmail = ""
    userName = ""
    currentUser = {}
    length = this.memories.length
    static getInstance() {
        if (DataManager.myInstance == null) {
            DataManager.myInstance = new DataManager()
        }
        return this.myInstance
    }

    getUser(email) {
        return this.users.find((user) => user.email === email)
    }

    validateUser({ email, password }) {
        return (
            this.users.filter(
                (user) => user.email === email && user.password === password
            ).length > 0
        )
    }

    getUserEmail() {
        return this.userEmail
    }
    getCurrentUser() {
        return this.users.find((user) => user.email === this.userEmail)
    }
    setUser(email) {
        this.currentUser = this.getUser(email)
        this.userEmail = email
    }

    createNewUser({ email, name, password }) {
        this.users.push({
            email: email,
            name: name,
            password: password,
        })
    }

    getMemories(email) {
        return this.memories.filter((memory) => memory.email == email)
    }
    deleteMemory(id) {
        this.memories = this.memories.filter((memory) => memory.id !== id)
    }

    updateMemory(newMemory, oldMemory) {
        var indexToUpdate = this.memories.indexOf(oldMemory)
        this.memories[indexToUpdate] = newMemory
    }
    getNewID() {
        return this.length+1
    }
    createNewMemory(newMemory) {
        this.memories.push(newMemory)
        this.length = this.length+1
    }
}