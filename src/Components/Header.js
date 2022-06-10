import React from "react";
import Hbo from "../hbo.png";
import "./Header.css";

const Header = ({black}) => {
  return(
    <div>
      <header className={black ? 'black' : ''}>
        <div className="header--content">
          <div className="header--contentLogo">
            <img src={Hbo} />
          </div>
          <div className="header--contentPerfil">
            <div className="header--contentPerfil1">Aj</div>
            <div className="header--contentPerfil2">Alexandre</div>
          </div>
        </div>
      </header> 
    </div>  
  )
}

export default Header;