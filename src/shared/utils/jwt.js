import jwt from "jsonwebtoken";

const ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN;
const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN;

export const generateTokens = (payload) => {
  if (!payload || typeof payload !== "object") {
    throw new Error("JWT payload must be an object");
  }

  const accessToken = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
      algorithm: "HS256",
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    }
  );

  const refreshToken = jwt.sign(
    payload,
    process.env.JWT_REFRESH_SECRET,
    {
      algorithm: "HS256",
      expiresIn: REFRESH_TOKEN_EXPIRES_IN,
    }
  );

  return { accessToken, refreshToken };
};

export const verifyToken = (token, secret) => {
  return bcrypt.verify(token, secret);
};
