
const Veggetable = require('../models/veggetables')

const dataController = {
  // Index,
  index (req, res, next) {
    Veggetable.find({}, (err, foundVeggetables) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.veggetables = foundVeggetables
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Veggetable.findByIdAndDelete(req.params.id, (err, deletedVeggetable) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.veggetable = deletedVeggetable
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    req.body.isReadyToEat = req.body.isReadyToEat === 'on'
    Veggetable.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedVeggetable) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.Veggetable = updatedVeggetable
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.isReadyToEat = req.body.isReadyToEat === 'on'
    Veggetable.create(req.body, (err, createdVeggetable) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.veggetable = createdVeggetable
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Veggetable.findById(req.params.id, (err, foundVeggetable) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a veggetable with that ID'
        })
      } else {
        res.locals.data.veggetable = foundVeggetable
        next()
      }
    })
  }
}

module.exports = dataController
