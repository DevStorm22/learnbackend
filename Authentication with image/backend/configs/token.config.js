import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "./configs/.env" });

const generateToken = async (id) => {
  const token = await jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  }); // jwt.sign(payload, secret, options) this is correct syntax and it is used to generate a token
  return token;
};

export default generateToken;
