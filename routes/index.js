import express from "express";
const indexRouter = express.Router()

indexRouter.get('/', (req, res) => {
  res.redirect('/api/restaurants')
})

export default indexRouter