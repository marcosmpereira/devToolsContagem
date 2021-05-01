
const Usuario = require('../models/Usuario');
const Utils = require('../Utils');

const UsuarioBO = {

  async createUsuario(usuarioRequest, idUsuario = null) {
    if(usuarioRequest != undefined) {
      const isCamposValidos = this.validaCamposCriarUsuario(usuarioRequest);
      if(isCamposValidos.isValid === true) {
        
        if(idUsuario !== null) {
          const usuario = await Usuario.getUsuarioById(idUsuario);
          if(usuario && usuario.id){
            usuarioRequest.id = usuario.id;
            return {
              data: await Usuario.updateUsuario(usuarioRequest),
              msg: Utils.getMessage("Usuário alterado com sucesso!").msg
            }; 
          } else { 
            return Utils.getMessage("Usuário inexistente!");
          }
        } else { 
          return  {
            data: await Usuario.createUsuario(usuarioRequest),
            msg: Utils.getMessage("Usuário cadastrado com sucesso!").msg
          }; 
        }

      }
      return Utils.getMessage(isCamposValidos.msg);
    }
    return Utils.getMessage("Usuário não informado!");
  },

  async getUsuarioById(id) {
    if(id && id !== null && id !== undefined) {
      return await Usuario.getUsuarioById(id);
    }
    return Utils.getMessage("Campo id não informado!");
  },

  async getUsuarios() {
    const users = await Usuario.findAll();
    if(users.length > 0) 
      return users;
    else 
      return Utils.getMessage("Nenhum usuário encontrado!");
  },

  async deleteUsuario(id) {
    if(id !== null && id != undefined) {
      const result = await Usuario.deleteUsuario(id);
      return  {
        data: result,
        msg: Utils.getMessage("Usuário excluido com sucesso!").msg
      }; 
    }
    return Utils.getMessage("Campo id não informado")
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