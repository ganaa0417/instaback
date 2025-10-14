import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import useRouter from "./router/user/user.route.js";
import postRouter from "./router/post/post.route.js";
const port = 8000;

const app = express();
app.use(express.json());

const connecttoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lozuninganaawer_db_user:kRq7abVn6XVW2RE6@hop1.lipbles.mongodb.net/"
    );
  } catch (error) {
    console.log(error);
  }
};

connecttoDB();
app.use(cors());
// app.post("/sign-up");

// app.post("/login");
app.use("/", postRouter);
app.use("/", useRouter);

// app.post("/post", async (req, res) => {
//   const body = req.body;

//   const caption = body.caption;
//   const images = body.images;
//   const userId = body.userId;

//   const createPost = await Post_Model.create({
//     caption: caption,
//     userId: userId,
//     image: images,
//   });

//   res.json(createPost);
// });

// app.get("/posts/", async (req, res) => {
//   // const params = req.params;
//   // const { userId } = params;
//   const info = await Post_Model.find();
//   res.json(info);
// });

// app.post("/create/post", async (req, res) => {
//   const body = req.body;
//   const createUser = await Post_Model.create({
//     images: body.images,
//     caption: body.caption,
//     userId: body.userId,
//   });
//   res.json(createUser);
// });

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
