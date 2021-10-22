import React from 'react'

function NavbarItem(render, ...props){

    if(render){

        return(
            <li class="nav-item">
                <a onClick={props.onClick} class="nav-link" href={props.href}>{props.label}</a>
              </li>
        )
    }else{
        return false;
    }
}

export default NavbarItem