const db = require('../db')

class BuyersController {
  async createBuyers(req, res) {
    const {name, surname} = req.body
    const newPerson = await db.query( `INSERT INTO buyers (name, surname) values ($1, $2) RETURNING *`, [name, surname])
    console.log("добавлен")
    res.json(newPerson.rows[0])
  }
  async getBuyers(req,res) {
    const users = await db.query(`SELECT * FROM buyers`)
    console.log("показаны все пользователи")
    res.json(users.rows)
  }
  async getOneBuyers(req,res) {
    const id = req.params.id
    const user = await db.query(`SELECT * FROM buyers WHERE id = $1`, [id])
    console.log("показан один пользователь")
    res.json(user.rows[0])
  }
  async updateBuyers(req,res) {
    const {id, name, surname} = req.body
    const user = await db.query( `UPDATE buyers SET name = $1, surname = $2 WHERE id = $3 RETURNING *`, [name, surname, id])
    res.json(user.rows[0])
  }
  async deleteBuyers(req,res) {
    const id = req.params.id
    const user = await db.query( `DELETE FROM buyers WHERE id = $1 RETURNING *`, [id])
    res.json(user.rows[0])
  }
}

module.exports = new BuyersController()