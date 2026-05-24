import React, {useContext} from "react"
import "./intro.css"
import me_dark from "../../img/2.png"
import me_light from "../../img/100.png"
import {ThemeContext} from "../context";

const Intro = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hallo   ,  ich bin </h2>
                    <h1 className="i-name">Stephane Ulrich </h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">MES Engineer</div>
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Industry 4.0</div>
                            <div className="i-title-item">OPC-UA Specialist</div>
                            <div className="i-title-item">DJ Master</div>
                        </div>
                    </div>
                    <section className="i-desc">

                        Ich entwickle MES- und Software-Lösungen für die Industrie — von OPC-UA-Integration
                        über SCADA-Anbindung bis zu nativen Tools. Aktuell bei BASF, Alumnus der TU Dortmund.

                    </section>
                </div>
            </div>
            <div className="i-rigth">
                <div className="i-bg"/>
                <img src={darkMode ? me_dark:me_light} alt="" className="i-img"/>
            </div>
        </div>
    )
}

export default Intro;
