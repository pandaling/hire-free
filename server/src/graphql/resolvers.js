import mongoose from 'mongoose';
import { Kind } from 'graphql';

const User = mongoose.model('User');

async function dotify(obj) {
  const res = {};

  function recurse(obj, current) {
    for (const key in obj) {
      const value = obj[key];
      const newKey = (current ? current + '.' + key : key);
      if (value && typeof value === 'object') {
        recurse(value, newKey);
      } else {
        res[newKey] = value;
      }
    }
  }

  await recurse(obj);
  return res;
}

const resolvers = {
  Query: {
    user: async (root, { _id }, context, info) => {
      return await User.findOne({ _id }).exec();
    },
    users: async (root, args, context, info) => {
      return await User.find({}).exec();
    },
  },
  Datetime: {
    __parseValue(value) {
      return new Date(value); // value from the client
    },
    __serialize(value) {
      return value.toISOString(); // value sent to the client
    },
    __parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  },
  User: {
    // postId: async (root, args, context, info) => {
    //   // _id, limit, skip
    //   // return await Post.find({ _id: root.postId }).limit(args.limit).skip(args.skip).exec();
    //   return await Post.find({ _id: root.postId }).exec();
    // },
    // todoId: async (root, args, context, info) => {
    //   return await Todo.find({ _id: root.todoId }).exec();
    // },
  },
  Mutation: {
    createUser: async (root, { user }, context, info) => {
      const newUser = await new User(user);
      const result = await new Promise((resolve, reject) => {
        newUser.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });

      return result;
    },
    updateUser: async (root, { _id, user }, context, info) => {
      const result = await new Promise((resolve, reject) => {
        User.findByIdAndUpdate(_id, { $set: { ...user } }, { new: true }).exec((err, res) => {
          err ? reject(err) : resolve(res);
        })
      });

      return result;
    },
    deleteUser: async (root, { _id }, context, info) => {
      const result = await new Promise((resolve, reject) => {
        User.deleteOne({ _id }).exec((err, res) => {
          err ? reject(err) : resolve(res);
        })
      });

      return result;
    },
  },
};

export default resolvers;
