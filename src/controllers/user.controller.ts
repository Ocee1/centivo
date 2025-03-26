import userService from '../services/user.service';
import { IUser, IUserInput } from '../models/user';
import { Types } from 'mongoose';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export const createUser = async (req: any, res: any) => {
  try {
    const { name, email, age } = req.body;
    
    const userData: IUserInput = {
      name,
      email,
      age,
    };

    const user = await userService.createUser(userData)
    return res.status(201).json({
      status: 'Success',
      message: 'User created successfuly',
      data: user
    });
  } catch (error: any) {
    return res.status(500).json({
      status: 'Fail',
      message: error.message || 'An unexpected error occurred.'
    });
  }
};

export const getUserDetail = async (req: any, res: any) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: 'Fail',
      message: 'The provided ID is not a valid MongoDB ObjectId.'
    });
  }

  try {
    const user = await userService.getUserById(id)
    if (!user) {
      return res.status(404).json({
        status: 'Fail',
        message: 'User not found'
      })
    }
    return res.status(200).json({
      status: 'Success',
      message: 'User retrieved successfully',
      data: user
    });
  } catch (error: any) {
    return res.status(500).json({
      status: 'Fail',
      message: error.message || 'An unexpected error occurred.'
    });
  }
};


export const fetchAllUsers = async (
  req: any,
  res: any
) => {
  try {
    const users = await userService.getAllUsers();
    
    return res.status(200).json({
      status: 'success',
      message: 'Users fetched successfully',
      data: users
    });
  } catch (error: any) {
    return res.status(500).json({
      status: 'error',
      message: 'Failed to fetch users',
      error: error.message
    });
  }
};