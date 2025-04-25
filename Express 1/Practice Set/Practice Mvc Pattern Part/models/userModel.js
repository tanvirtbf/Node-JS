const userInfo = []

class User {
    constructor(fullname, email, password){
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    save(){
        userInfo.push(this)
    }

    static fetchAll(){
        return userInfo;
    }
}

export default User