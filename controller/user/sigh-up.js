import { ig_userModel } from "../../schema/user.schema.js";
import { hash } from "bcrypt";
export const sighup = async (req, res) => {
  const JWT_SECRET = "TEST";
  const body = req.body;
  const username = body.username;
  const saltRounds = 8;
  const password = await hash(body.password, saltRounds);
  const email = body.email;
  const existingUser = await ig_userModel.findOne({
    username: username,
  });
  if (existingUser) {
    res.status(400).json({ message: "user already exists" });
  } else {
    const createdUser = await ig_userModel.create({
      username: username,
      email: email,
      password: password,
    });
    const accessToToken = jwt.sign(
      {
        data: createdUser,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json(accessToToken);
  }
};
