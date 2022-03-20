import React from "react"
import "./intro.css"
import me from "../../img/1.jpg"

function handleScroll(e){
    e.preventDefault();
    window.scroll(0,860);
}
const Intro = () => {

    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hallo   ,  ich bin </h2>
                    <h1 className="i-name">Stephane Ulrich </h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Develloper</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Content Creator</div>
                        </div>
                    </div>
                    <p className="i-desc">
                       Willkommen auf mein kleine Portfolio.hier sehen sie
                        mehr über mich
                    </p>
                </div>
            </div>
            <div className="i-arrow" onClick={handleScroll} ></div>
            <div className="i-rigth">
                <div className="i-bg"></div>
                <img src={me} alt="" className="i-img"/>
            </div>
        </div>
    )
}

export default Intro;
