const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')

router.post('/product', productController.createProduct)
router.get('/product',productController.getProduct)
router.get('/product/:id',productController.getOneProduct)
router.put('/product/',productController.updateProduct)
router.delete('/product/:id',productController.deleteProduct)

module.exports = router