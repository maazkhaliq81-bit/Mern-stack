import express from 'express'
import { checkAvailabilityOfCar,createBooking,getUserBookings,getOwnerBookings, changeBookingStatus } from '../controllers/bookingcontroller.js'
import {protect} from '../middleware/auth.js'
const bookingRouter = express.Router();

bookingRouter.post('cheak-availabaility',protect, checkAvailabilityOfCar)
bookingRouter.post('create',protect, createBooking)
bookingRouter.post('user',protect,  getUserBookings)
bookingRouter.post('owner',protect,  getOwnerBookings)
bookingRouter.post('change-status',protect,  changeBookingStatus)

export default bookingRouter;