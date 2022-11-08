const RESOURCE_PATH = '/veggetables'

const viewController = {
  index (req, res, next) {
    res.render('veggetables/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('veggetables/New')
  },
  edit (req, res, next) {
    res.render('veggetables/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('veggetables/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const veggetableId = req.params.id || res.locals.data.veggetable._id
    res.redirect(`${RESOURCE_PATH}/${veggetableId}`)
  }

}

module.exports = viewController
