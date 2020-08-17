import { Schema, model, Types } from 'mongoose';

const userSchema = Schema({
  username: String,
  email: { type: String, unique: true, required: true, lowercase: true },
  phoneNumber: String,
  skillSets: String,
  hobby: String,
}, { timestamps: true });

const User = model('User', userSchema);

export default User;
