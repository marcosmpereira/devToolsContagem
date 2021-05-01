const db = require('../config/db');

module.exports = {
  
  async createUsuario(usuarioRequest) {
    const { usuario, nome, email, skype, discord, telefone } = usuarioRequest;
    const query = `
      INSERT INTO tb_usuario (usuario, nome, email, skype, discord, telefone )
      VALUES($1, $2, $3, $4, $5, $6) RETURNING * `;

    const params = [usuario, nome, email, skype, discord, telefone]
    const res = await db.query(query, params)
    return res.rows[0];
  },
  
  async getUsuarioById(id) {
    let query = `SELECT * FROM tb_usuario WHERE tb_usuario.id = $1`;
    const result = await db.query(query, [id]);
    return result.rows[0];
  },

  async findAll() {
    let query = `SELECT * FROM tb_usuario`;
    const result = await db.query(query);
    return result.rows;
  },

  async deleteUsuario(id) {
      let query = `DELETE FROM tb_usuario WHERE tb_usuario.id = $1 RETURNING *`;
      const result = await db.query(query, [id]);
      return result.rows[0];
  },

  async updateUsuario(usuarioRequest) {
    const { id, usuario, nome, email, skype, discord, telefone } = usuarioRequest;
    let query = `
      UPDATE tb_usuario
      SET usuario = $1,
          nome = $2,
          email = $3,
          skype = $4,
          discord = $5,
          telefone = $6
      WHERE tb_usuario.id = $7
      RETURNING *
    `;
    const result = await db.query(query,[usuario, nome, email, skype, discord, telefone, id]);
    return result.rows[0];
  }
}