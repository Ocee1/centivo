import { Schema, model, Document } from 'mongoose';

export interface IUserInput {
  name: string;
  email: string;  
  age?: number;
}

// Interface for TypeScript
export interface IUser extends IUserInput, Document {
  name: string;
  email: string;
  age: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    age: {
      type: Number,
      required: true
    },
    deletedAt: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true,
  }
);

// Create and export the model
const User = model<IUser>('User', UserSchema);
export default User;