const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: String,
  misc: String,
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;