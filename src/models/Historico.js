const db = require('../config/db');

module.exports = {
  
  async getHistoricoById(id) {
    let query = 'SELECT * FROM tb_usuario'
    const result = await db.query(query);
    return result.rows[0];
  },

  async createHistorico(historico) {
    const { data, autor, descricao, versao } = historico;
    const query = `
      INSERT INTO tb_historico (data, autor, descricao, versao )
      VALUES($1, $2, $3, $4) RETURNING * `;

    const params = [data, autor, descricao, versao];
    const res = await db.query(query, params);
    return res.rows[0];
  }
}