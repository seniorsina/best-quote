import express from "express"
import { UserValidator } from "../middleware/user-validator.middleware";
import { userService } from "../services/user.services";
const router = express.Router();
router.post('/create',UserValidator.validateRegister,userService.registerUser)
router.get('/lists',userService.getAll);

export { router as userRouter}