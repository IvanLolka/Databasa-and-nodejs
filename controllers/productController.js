const db = require('../db')

class ProductController {
  async createProduct(req, res) {
    const {title, price, availability} = req.body
    const newProduct = await db.query( `INSERT INTO product (title, price, availability) values ($1, $2, $3) RETURNING *`, [title, price, availability])
    res.json(newProduct.rows[0])
  }
  async getProduct(req,res) {
    const products = await db.query(`SELECT * FROM product`)
    res.json(products.rows)
  }
  async getOneProduct(req,res) {
    const id = req.params.id
    const product = await db.query(`SELECT * FROM product WHERE id = $1`, [id])
    res.json(product.rows[0])
  }
  async updateProduct(req,res) {
    const {id, title, price, availability} = req.body
    const product = await db.query( `UPDATE product SET title = $1, price = $2, availability = $3 WHERE id = $4 RETURNING *`, [title, price, availability, id])
    res.json(product.rows[0])
  }
  async deleteProduct(req,res) {
    const id = req.params.id
    const product = await db.query( `DELETE FROM product WHERE id = $1 RETURNING *`, [id])
    res.json(product.rows[0])
  }
}

module.exports = new ProductController()