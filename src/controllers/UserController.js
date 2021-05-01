const usuarioBO = require('../business/UsuarioBO');

module.exports = {
  async createUsuario(req, res) {
    const result = await usuarioBO.createUsuario(req.body);
    return res.json(result);
  },

  async updateUsuario(req, res) {
    const result = await usuarioBO.createUsuario(req.body, req.params.userId);
    return res.json(result);
  },

  async getUsuarioById(req, res) {
    const { userId } = req.params;
    const result =  await userBO.getUsuario(userId);
    return res.json(result);
  }
}