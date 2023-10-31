const express = require('express')
const BuyersRouter = require('./routes/BuyersRouter')
const ProductRouter = require('./routes/ProductRouter')
const PORT = process.env.PORT || 1777
const app = express()


app.use(express.json())
app.use('/api', BuyersRouter)
app.use('/api', ProductRouter)

app.listen(PORT, () => console.log(`Сервер стартовал на проте ${PORT}`))