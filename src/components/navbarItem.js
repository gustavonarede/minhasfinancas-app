import React from 'react'

function NavbarItem(props){

    return(
        <li class="nav-item">
            <a class="nav-link" href={props.href}>{props.label}</a>
          </li>
    )
}

export default NavbarItem