module.exports = {
  
  validaCampo(campo) {
    if(campo != null && campo != "" && campo != undefined) {
     return true;
    }
    return false;
  },

  validaCampos(campos) {
    const result = campos.filter(element => {
      return this.validaCampo(element) === false;
    });
    return result.length > 0 ? false : true;
  },

  getMessage(msg) {
    return {
      msg: msg
    }
  },

  validaEmail(email){
    er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}$/; 
    if( !er.exec(email) ) {
      return false;
    }
    return true;
  }
}