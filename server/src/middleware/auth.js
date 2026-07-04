import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env['SESSION_SECRET'];

export const verifyToken = (req, res, next) => {
  // 1. Get token from Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ error: 'Access denied: No token provided' });
  }

  try {
    // 2. Verify token
    const payload = jwt.verify(token, SECRET_KEY);

    // 3. Attach user info including role to req.user
    req.user = { 
      id: payload.userId, 
      username: payload.username, 
      role: payload.role // new
    };

    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};