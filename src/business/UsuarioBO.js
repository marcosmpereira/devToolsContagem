const Usuario = require('../models/Usuario');
const Utils = require('../Utils');

const UsuarioBO = {

  async createUsuario(usuarioRequest) {
    if(usuarioRequest != undefined) {
      const isCamposValidos = this.validaCamposCriarUsuario(usuarioRequest);
      if(isCamposValidos.isValid === true) {
        return await Usuario.createUsuario(usuarioRequest); 
      }
      return Utils.getMessage(isCamposValidos.msg);
    }
    return Utils.getMessage("Usuário não informado!");
  },

  async getUsuarioById(id) {
    return await Usuario.getUsuarioById(id);
  },

  validaCamposCriarUsuario(campos) {
    const { usuario, nome, email } = campos;
    const isCamposValidos = Utils.validaCampos([usuario, nome, email]);
    const isEmailValido = Utils.validaEmail(email);

    if(!isCamposValidos) 
      return {
        msg: Utils.getMessage("Campos obrigatórios não informados!").msg,
        isValid: false
      };

    if(!isEmailValido) 
      return {
        msg: Utils.getMessage("E-mail Inválido").msg,
        isValid: false
      }

    return { 
      isValid: true,
      msg: "ok" 
    }
  }
}
module.exports = UsuarioBO;