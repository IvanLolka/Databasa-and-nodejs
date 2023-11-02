const db = require('../db')

class AdressController {
  async createAdress(req, res) {
    const { adress, title } = req.body;
    const newAdress = await db.query( `INSERT INTO adress (adress, title) values ($1, $2) RETURNING *`, [adress, title]);
    res.json(newAdress.rows[0]);
  }

  async getAdress(req, res) {
    const adresses = await db.query(`SELECT * FROM adress`);
    res.json(adresses.rows);
  }

  async getOneAdress(req, res) {
    const id = req.params.id;
    const adress = await db.query(`SELECT * FROM adress WHERE id = $1`, [id]);
    res.json(adress.rows[0]);
  }

  async updateAdress(req, res) {
    const { id, adress, title } = req.body;
    const updatedAdress = await db.query( `UPDATE adress SET adress = $1, title = $2 WHERE id = $3 RETURNING *`, [adress, title, id]);
    res.json(updatedAdress.rows[0]);
  }

  async deleteAdress(req, res) {
    const id = req.params.id;
    const deletedAdress = await db.query( `DELETE FROM adress WHERE id = $1 RETURNING *`, [id]);
    res.json(deletedAdress.rows[0]);
  }
}

module.exports = new AdressController();
