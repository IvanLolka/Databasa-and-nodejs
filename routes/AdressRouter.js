const Router = require('express')
const router = new Router()
const AdressController = require('../controllers/AdressController.js')

router.post('/adress', AdressController.createAdress)
router.get('/adress',AdressController.getAdress)
router.get('/adress/:id',AdressController.getOneAdress)
router.put('/adress/',AdressController.updateAdress)
router.delete('/adress/:id',AdressController.deleteAdress)

module.exports = router