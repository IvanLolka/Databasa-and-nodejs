const Router = require('express')
const router = new Router()
const postController = require('../controllers/BasketController')

router.post('/basket', postController.createBasket)
router.get('/basket', postController.getBasket)
router.get('/basket/:id', postController.getBasketByClient)
router.put('/basket', postController.updateBasket)
router.delete('/basket/:id/:buyers_id/:product_id', postController.deleteBasket)



module.exports = router