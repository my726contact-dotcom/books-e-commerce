import express from 'express'
import authMiddleware from '../middleware/auth.js';
import { confirmPayment, createOrder, deleteOrder, getOrderById, getOrders, getUserOrders, updateOrder } from '../controllers/orderController.js';



const orderRouter = express.Router();

//--------Protected Routes

orderRouter.post('/', authMiddleware, createOrder);
orderRouter.get('/confirm', confirmPayment);


//--------------Public Routes----------

orderRouter.get('/', getOrders);
orderRouter.get('/user', authMiddleware, getUserOrders);
orderRouter.get('/:id', getOrderById);
orderRouter.put('/:id', updateOrder);

orderRouter.delete('/:id', deleteOrder);

export default orderRouter;