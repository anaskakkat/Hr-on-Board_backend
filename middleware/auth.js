
export default (role) => (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    if (role && decoded.role !== role) return res.status(403).json({ message: 'Forbidden' });
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};