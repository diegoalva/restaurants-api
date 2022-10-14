import express from "express";
import ImageController from "../controllers/image.js";
const ImagerRouter = express.Router()

ImagerRouter.get('/images/:image', ImageController.getImage)

export default ImagerRouter