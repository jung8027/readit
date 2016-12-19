const router = require ("express").Router()

router.use('/post', require('./post-router'))
router.use('/comment', require('./comment-router'))
router.use('/vote', require('./vote-router'))

module.exports = router;