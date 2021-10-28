import React from 'react'


function NavbarItem({render, href, label, onClick}){

    if(render){
        return (
            <li className="nav-item">
                    <a onClick={onClick} className="nav-link" href={href}>{label}</a>
                  </li>
        )
    }else {
        return null
    }

    
}

export default NavbarItem