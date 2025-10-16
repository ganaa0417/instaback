import { ig_userModel } from "../../schema/user.schema.js";

export const followUser = async (req, res) => {
  const followedUserId = req.params.followedUserId;
  const followingUserId = req.user._id;

  if (followedUserId === followingUserId)
    res.status(400).json({ message: "gg man gg" });

  const followingUser = await ig_userModel.findById(followingUserId);
  const followedUser = await ig_userModel.findById(followedUserId);

  const test = followedUser.followers;

  const isfollowed = test.includes(followingUserId);

  if (isfollowed) {
    await ig_userModel.findOneAndUpdate(
      { _id: followingUserId },
      {
        following: followingUser.following.filter(
          (item) => item.toString() !== followedUserId
        ),
      }
    );
    await ig_userModel.findOneAndUpdate(
      { _id: followingUserId },
      {
        followers: followingUser.followers.filter(
          (item) => item.toString() !== followingUser
        ),
      }
    );
  } else {
    await ig_userModel.findOneAndUpdate(
      { _id: followingUserId },
      {
        followers: [...followingUser.following, followedUser],
      }
    );
    await ig_userModel.findOneAndUpdate(
      { _id: followingUserId },
      {
        followers: [...followedUser.followers, followingUser],
      }
    );
    res.status(200).json({ message: "success" });
  }
};
