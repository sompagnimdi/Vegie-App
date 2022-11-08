const mongoose = require('mongoose')

// Make A Schema
const veggetableSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  isReadyToEat: Boolean
}, { timestamps: true })

// Make A Model From The Schema

const Veggetable = mongoose.model('Veggetable', veggetableSchema)

// Export The Model For Use In The App

module.exports = Veggetable
