const Historico = require('../models/Historico');
const UsuarioBO = require('./UsuarioBO');

const HistoricoBO = {

  async getHistorico(id) {
      return await Historico.getHistoricoById(id)
  },

  async createHistorico(historico) {
    if(historico != undefined) {
      const autor = await UsuarioBO.getUser(historico.autor);
      if(autor.id) {
        return await Historico.createHistorico(historico); 
      } else {
        return {message: "Erro ao inserir historico, campo autor é obrigatório!"};
      }
    }
  }
  
}
module.exports = HistoricoBO;