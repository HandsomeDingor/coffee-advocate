const mongoose = require('mongoose');

const { Schema } = mongoose;
const reviewSchema = require('./Review');
const ratingSchema = require('./Rating');


const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  reviews: [reviewSchema],
  ratings: [ratingSchema]
});

productSchema.virtual('ratingCount').get(function() {
  return this.ratings.length;
});

productSchema.virtual('reviewCount').get(function() {
  return this.ratings.length;
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
