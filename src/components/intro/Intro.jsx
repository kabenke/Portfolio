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
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Content Creator</div>
                        </div>
                    </div>
                    <section className="i-desc">
                        <h2>Willkommen</h2>.....................................................<br/>
                        hier lesen sie mehr über mich
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
