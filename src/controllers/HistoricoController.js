const historicoBO = require('../business/HistoricoBO');

module.exports = {
  async createHistorico(req, res) {
    const result = await historicoBO.createHistorico(req.body);
    return res.json(result);
  },

  async getHistoricoById(req, res) {
    const { historicoId } = req.params;
    const result =  await historicoBO.getHistorico(historicoId);
    return res.json(result);
  }
}