import React from 'react'
import NavbarItem from './navbarItem'
import AuthService from '../app/service/authService'

const deslogar = () => {
  AuthService.removerUsuarioAutenticado();
}

const isUsuarioAutenticado = ()=>{
  return AuthService.removerUsuarioAutenticado();
}
function Navbar(){
    
    return (

        <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div class="container">
        <a href="https://bootswatch.com/" class="navbar-brand">Minhas Finanças</a>
        <button class="navbar-toggler" type="button"
         data-toggle="collapse" data-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false"
           aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
              <NavbarItem render={isUsuarioAutenticado()} href="#/home" label="Home" />
              <NavbarItem render={isUsuarioAutenticado()} href="#/cadastro-usuarios" label="Usuarios" />
              <NavbarItem render={isUsuarioAutenticado()} href="#/consulta-lancamentos" label="Lançamentos" />
              <NavbarItem  render={isUsuarioAutenticado()} onClick={deslogar} href="#/login" label="Sair" />
              </ul>

        </div>
      </div>
    </div>
    )
}
export default Navbar 