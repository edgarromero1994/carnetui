import React, { useState } from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'


const Navhome = ( {isScrolled}) => {
  const [imagenes] = useState({
    
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMgVKaSMmXAdQf5eRNIe8ltEF9-wHsQRibA&usqp=CAU"
})

const links=[
    {name: "Inicio", link: "/"},

];

  return (
    <div className='navbar12'>
    <nav className={`flex ${isScrolled ? "scrolled" : ""}`} style={{justifyContent: 'space-between', alignItems: 'center'}}>
      <div className="left flex a-center" style={{justifyContent: 'flex-start'}}>
        <div className="brand flex a-center j-center">
        </div>
        <img className='logokuk' src={imagenes.imagen} alt="" />
      </div>

      <div className="right">
        <ul className="links flex" style={{display: 'flex', justifyContent: 'flex-end'}}>
          {links.map(({name, link}) =>{
            return(
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>  
  </div>
     
  )
}

export default Navhome