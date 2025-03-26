import User, { IUser, IUserInput } from "../models/user";

const createUser = async (data: IUserInput) => {
  try {
    const user = new User(data);
    return await user.save();
  } catch (error: any) {
    throw new Error(`Error creating user: ${error.message}`);
  }
};

const getUserById = async (id: string) => {
  try {
    return await User.findOne({ _id: id, age: { $gt: 21 } }).select('-__v -deletedAt -updatedAt');
  
  } catch (error: any) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
};

const getAllUsers = async (): Promise<IUser[]> => {
  try {
    const users = await User.find({ deletedAt: null }).select('-__v -deletedAt -updatedAt');
    return users;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

export default {
  createUser,
  getUserById,
  getAllUsers
};