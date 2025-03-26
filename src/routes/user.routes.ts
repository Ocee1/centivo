import express from 'express';
import { createUser, fetchAllUsers, getUserDetail } from '../controllers/user.controller';

const router = express.Router();
router.post('/users/create', createUser);
router.get('/users/:id', getUserDetail);
router.get('/users', fetchAllUsers);

export default router;