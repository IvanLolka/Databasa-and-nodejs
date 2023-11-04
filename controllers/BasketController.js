const db = require('../db')

class BasketController {
  async createBasket(req, res) {
    const {product_id,buyers_id,adress_id,delivered} = req.body
    const newBasket = await db.query( `INSERT INTO basket (product_id,buyers_id,adress_id,delivered) values ($1, $2, $3, $4) RETURNING *`, [product_id,buyers_id,adress_id,delivered])
    res.json(newBasket.rows[0])
  }
  async getBasket(req,res) {
    const basket = await db.query(`SELECT * FROM basket`)
    res.json(basket.rows)
  }
  async getBasketByClient(req,res) {
    const id = req.query.id
    const basket = await db.query(`SELECT * FROM basket WHERE buyers_id = $1`, [id])
    res.json(basket.rows)
  }
  async updateBasket(req,res) {
    const {id, buyers_id, product_id, adress_id, delivered} = req.body
    const basket = await db.query(`UPDATE basket SET adress_id = $4, delivered = $5 WHERE id = $1 and buyers_id = $2 and product_id = $3 RETURNING *`, [id, buyers_id, product_id, adress_id, delivered])
    res.json(basket.rows)
  }
  async deleteBasket(req,res) {
    const id = req.params.id
    const buyers_id = req.params.buyers_id
    const product_id = req.params.product_id
    const basket = await db.query(`DELETE FROM basket WHERE id = $1 and buyers_id = $2 and product_id = $3 RETURNING *`, [id,buyers_id,product_id])
    res.json(basket.rows)
  }
}

module.exports = new BasketController()