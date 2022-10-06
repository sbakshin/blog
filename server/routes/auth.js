import {Router} from "express"

import {registration, login, getUserByToken} from "../controllers/auth.js";
import {checkAuth} from "../utils/checkAuth.js";

const router = new Router()

// Registration
router.post('/registration', registration)

// Login
router.post('/login', login)

// Get User by token
router.get('/userByToken', checkAuth, getUserByToken)

export default router