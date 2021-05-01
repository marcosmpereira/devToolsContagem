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

  async deleteUsuario(req, res) {
    const result = await usuarioBO.deleteUsuario(req.params.userId);
    return res.json(result);
  },

  async getUsuarioById(req, res) {
    const { userId } = req.params;
    const result =  await usuarioBO.getUsuario(userId);
    return res.json(result);
  },

  async getUsuarios(req, res) {
    const result =  await usuarioBO.getUsuarios()
    return res.json(result);
  }
}