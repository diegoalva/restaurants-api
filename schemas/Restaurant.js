import mongoose from "mongoose";

const RestaurantSchema = mongoose.Schema({
  idMeal: {
    type: Number,
    required: false,
    trim: true
  },
  nameMeal: {
    type: String,
    required: true,
    trim: true
  },
  
  description: {
    type: String,
    required: true,
    trim: true
  },
  
  price: {
    type: Number,
    required: true,
    trim: true
  },
  
  category: {
    type: String,
    required: true,
    trim: true
  },
  
  isSale: {
    type: Boolean,
    required: true,
    trim: true
  },
  
  nameRestaurant: {
    type: String,
    required: true,
    trim: true
  },
  
  imgURL: {
    type: String,
    required: false,
    trim: true
  }
})

RestaurantSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema)

export default Restaurant