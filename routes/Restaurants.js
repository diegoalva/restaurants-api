import express from "express";
import Restaurant from '../schemas/Restaurant.js'
const router = express.Router();

router.get('/restaurants', (req, res, next) => {
  const host = req.protocol + "://" + req.get('host')
  Restaurant.find({})
    .then(products => {
      products.forEach(p => {
        const { idMeal, id } = p
        Restaurant.findByIdAndUpdate(id,
          {
            $set: {
              imgURL: host + "/api/images/" + idMeal + ".webp"
            },
          },
          { new: true })
          .then()
          .catch(err => console.log(err))
      })
    })
    .then()
    .catch(err => console.error(err))

  next()
})

router.get('/restaurants', (req, res, next) => {
  Restaurant .find({})
    .then(products => res.json(products))
    .catch(err => console.log(err))
});

router.get('/restaurants/:id', (req, res) => {
  const { id } = req.params
  Restaurant.findById(id)
    .then(product => {
      if(!product) throw {error: "Product not found"}

      res.status(200).json(product)
    })
    .catch(err => res.status(400).json(err))
})

router.post('/restaurants', (req, res) => {
  const restaurant = req.body
  if(!Object.entries(restaurant).length){
    return res.status(400).json({
      error: "must have content"
    })
  }

  const newRestaurant = new Restaurant({
    nameMeal: restaurant.nameMeal,
    description: restaurant.description,
    price: restaurant.price,
    category: restaurant.category,
    isSale: restaurant.isSale,
    nameRestaurant: restaurant.nameRestaurant,
    imgURL: restaurant.imgURL
  })

  newRestaurant.save()
    .then(saveProduct => {
        res.status(201).json(saveProduct)
    })
    .catch(err => {
        res.status(400).json(err)
    })

})

router.delete('/restaurants/:id', (req, res) => {
  const { id } = req.params
  Restaurant.findByIdAndDelete(id)
    .then(productRemove => {
      if (!productRemove) {
        throw { message: 'Item not found' }
      }
      res.status(200).json({ productRemove, message: 'The item was removed' })
    })
    .catch(err => res.status(400).json(err))
})

export default router
