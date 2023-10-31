const Router = require('express')
const router = new Router()
const BuyersController = require('../controllers/BuyersController')

router.post('/buyers', BuyersController.createBuyers)
router.get('/buyers',BuyersController.getBuyers)
router.get('/buyers/:id',BuyersController.getOneBuyers)
router.put('/buyers/',BuyersController.updateBuyers)
router.delete('/buyers/:id',BuyersController.deleteBuyers)

module.exports = router