import "./toggle.css"
import React, {useContext} from 'react';
import Sun from "../../img/icons/sun.png";
import Moon from "../../img/icons/moon.png";
import {ThemeContext} from "../context";
const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = () =>
    {
        theme.dispatch({type:"TOGGLE"});
    }
    return (
            <div className="t">
                <img src={Moon} alt=""className="t-icon"/>
                <img src={Sun} alt="" className="t-icon"/>
                <div className="t-sw" >dark | ligth</div>
                <button className="t-bt" onClick={handleClick} style={{left : theme.state.darkMode ? "0" : "25px"}}> </button>
            </div>
    );
};

export default Toggle;