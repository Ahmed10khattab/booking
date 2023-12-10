const User = require('../models/user');
var bcrypt = require('bcryptjs'); p
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
//mm
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    const adduser = new User({
        email: req.body.email,
        password: hash,
        username: req.body.username,
        email: req.body.email
    });

    try {
        const saveduser = await adduser.save();
        res.status(200).json(saveduser);
    } catch (error) {
        res.status(500).json(error);

    }
}



const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) res.status(500).json('email not valid');
        const isPassword = await bcrypt.compare(req.body.password, user.password);
        if (!isPassword) res.status(500).json('password not valid');

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, 'sec');


        const { password, isAdmin, ...other } = user._doc;
        // res.status(200).json({"user":other,"token":token});

        res.cookie('access_token', token, { httpOnly: true }).status(200).json(other);

    } catch (error) {
        res.status(200).json("error in login");

    }




}

module.exports = { login, register }