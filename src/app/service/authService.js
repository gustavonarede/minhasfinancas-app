       import LocalStorageService from "./localStorageService"

       export const USUARIO_LOGADO = '_usuario_logado'
       export default class AuthService 
        {

            static isUsuarioAutenticado(){
                this.isUsuarioAutenticado
                const usuario = LocalStorageService.obterItem('_usuario_logado')
                return usuario && usuario.id;

            } 
            static removerUsuarioAutenticado(){

               LocalStorageService.removerItem('_usuario_logado') 
            }
            static logar(usuario){
                LocalStorageService.adicionarItem(USUARIO_LOGADO, usuario)
            }
            static obterUsuarioAutenticado(){
               return LocalStorageService.obterItem(USUARIO_LOGADO);
            }
        }