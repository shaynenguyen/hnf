const express       = require('express')
const controller    = require('../controllers/projectC')

// 2. Router configuration
const router        = express.Router();


router.get('/', (req, res) => {
    res.redirect("/list-all")
    // TODO: redirect to /list automative.
})

// Routes for retreving all projects
router.get('/list-all', controller.get_list_projects)

module.exports = router
