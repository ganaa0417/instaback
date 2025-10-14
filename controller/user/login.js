import { ig_userModel } from "../../schema/user.schema.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
export const login = async (req, res) => {
  const body = req.body;
  const JWT_SECRET = "TEST";
  const { email, password } = body;

  const success = await ig_userModel.findOne({ email });
  if (success) {
    const hashedPassword = success.password;
    const isValid = await compare(password, hashedPassword);
    if (isValid) {
      const accessToToken = jwt.sign(
        {
          data: success,
        },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.json(accessToToken);
    } else {
      res.status(400).json({ message: "wrong password" });
    }
  } else {
    res.status(404).json({ message: "you need to register" });
  }
};
