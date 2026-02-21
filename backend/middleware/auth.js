const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.cookies.token;   // ✅ read from cookie

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid token" });
  }
};


const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }   // ✅ 1 day expiry
);

module.exports = auth;