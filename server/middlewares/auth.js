import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next) => {
    const { token } = req.headers;
    
    if (!token) {
        return res.status(401).json({ success: false, message: "Not authorized, please log in again." });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        
        if (!tokenDecode || !tokenDecode.id) {
            return res.status(403).json({ success: false, message: "Invalid token, access denied." });
        }

        req.body = req.body || {}; // ✅ Ensure req.body is initialized
        req.body.userId = tokenDecode.id; // ✅ Safely assign userId

        next();
    } catch (error) {
        return res.status(403).json({ success: false, message: "Token verification failed." });
    }
};

export default userAuth;