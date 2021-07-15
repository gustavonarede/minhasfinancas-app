import React from 'react'
import NavbarItem from './navbarItem'

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
              <NavbarItem href="#/home" label="Home" />
              <NavbarItem href="#/cadastro-usuarios" label="Usuarios" />
              <NavbarItem href="#/" label="Lançamentos" />
              <NavbarItem href="#/login" label="Login" />
              </ul>

        </div>
      </div>
    </div>
    )
}
export default Navbar 