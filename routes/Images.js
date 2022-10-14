import express from "express";
import ImageController from "../controllers/image.js";
const ImagerRouter = express.Router()

ImagerRouter.get('/:image', ImageController.getImage)

export default ImagerRouter