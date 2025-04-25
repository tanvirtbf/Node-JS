import User from "../models/userModel.js";

export const userGetController = (req, res) => {
    
    res.render('userForm')
}



export const userPostController = (req, res) => {
    const {fullname, email, password} = req.body
    const user = new User(fullname, email, password)
    user.save();

    res.send('Successfully Posted a Form!')
}