import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import User from "../models/User.js";

export const registration = async (req, res) => {
    try {
        const { userName, password } = req.body

        const isUserExist = await User.findOne({ userName })

        if(isUserExist) {
            return res.json({ message: 'User is already exist!' })
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new User({
            userName,
            password: hash
        })

        await newUser.save()

        res.json({
            newUser,
            message: "User created!"
        })
    } catch (e) {
        res.json({
            message: "Error user registration!",
            e
        })
    }
}

export const login = async (req, res) => {
    try {
        const { userName, password } = req.body

        const user = await User.findOne({userName})

        if (!user) {
            return res.json({message: 'User not found!'})
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.json({message: 'Not correct password!'})
        }

        const token = jwt.sign({
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '30d'
            })

        res.json({
            token,
            user,
            message: 'Logged in!'
        })
    } catch (e) {
        res.json({
            message: "Error login!",
            e
        })
    }
}

export const getUserByToken = async (req, res) => {
    try {
        const user = await User.findById(decoded.id)

        if(!user) {
            res.json({
                message: "User not exist!"
            })
        }

        const token = jwt.sign({
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '30d'
            })

        res.json({
            user,
            token
        })
    } catch (e) {
        res.json({
            message: "Error get user!",
            e
        })
    }
}