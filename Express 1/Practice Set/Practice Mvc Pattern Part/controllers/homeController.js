import User from "../models/userModel.js"

export const homeController = (req, res) => {
    const userInfo = User.fetchAll()
    res.render('home', {userInfo: userInfo})
}

