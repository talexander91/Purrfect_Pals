const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const Discussion = require("../models/Discussion");
const Comment = require("../models/Comment.js");
const { signToken } = require("../utils/auth.js");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate({
          path: "discussions",
          populate: {
            path: "comments",
            model: "Comment",
          },
        });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    discussions: async (parent, args, context) => {
      return Discussion.find();
    },
    discussionById: async (parent, args, context, info) => {
      const discussion = await Discussion.findById(args._id)
        .populate(context.userId)
        .populate({
          path: "comments",
          populate: {
            path: "user",
          },
        });
      return discussion;
    },
  },
  Mutation: {
    register: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    addDiscussion: async (parent, { title }, context) => {
      if (context.user) {
        const discussion = await Discussion.create({
          title,
          user: context.user._id,
        });
        await User.findByIdAndUpdate(context.user._id, {
          $push: { discussions: discussion._id },
        });
        console.log(discussion);
        return discussion;
      }
    },
    addComment: async (parent, { text, discussion }, context) => {
      if (context.user) {
        const comment = await Comment.create({
          text,
          user: context.user,
          discussion,
        });

        await Discussion.findByIdAndUpdate(discussion, {
          $push: { comments: comment._id },
        });
        return comment;
      }
    },
  },
};

module.exports = resolvers;
