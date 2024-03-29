import jwt from "jsonwebtoken"

export const checkAuth = async (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

    if(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.userId = decoded.id
            next();
        } catch (e) {
            res.json({
                message: "Error authorization!"
            })
        }
    } else {
        res.json({
            message: "Error authorization!"
        })
    }
}