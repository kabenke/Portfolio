import React from "react";
import "./about.css"
import Front from  "../../img/2.png"
import Award from  "../../img/icons/3.png"

function handleScrol(e){
    e.preventDefault();
    window.scroll(0,1719);
}

const About = () =>
{
    return (

        <div className="a">
          <div className="a-left">
              <div className="a-card bg"/>
              <div className="a-card">
                  <img src={Front} alt="" className="a-img"/>
              </div>
          </div>
            <div className="a-arrow" onClick={handleScrol} > </div>
          <div className="a-rigth">
                <h1 className="a-title"> Über Mich </h1>
                <p className="a-sub"> "Just because something works doesn't mean it shouldn't be improved"</p>
                <div className="a-desc"> Ich studiere IT an der TU-Dortmund und habe eine sehr große Liebe
                    für Entwicklung und gutes Design.
                </div>
                <div className="a-award">
                   <div className="a-award-content-1">
                       <img src={Award} className="a-award-img" alt=""/>
                       <div className=".a-award-text">
                           <h4 className="a-award title">DSH-3</h4>
                           <div className="a-award-desc">
                               Deutsche Sprachprüfung für den Hochschulzugang
                           </div>
                       </div>
                   </div>
                    <div className="a-award-content-2">
                        <img src={Award} className="a-award-img" alt=""/>
                        <div className=".a-award-text">
                            <h4 className="a-award title">Symphony</h4>
                            <div className="a-award-desc">
                                Symfony ist ein in PHP geschriebenes Webframework
                            </div>
                        </div>
                    </div>
                    <div className="a-award-content-3">
                        <img src={Award} className="a-award-img" alt=""/>
                        <div className=".a-award-text">
                            <h4 className="a-award title">React</h4>
                            <div className="a-award-desc">
                                React ist eine JavaScript-Softwarebibliothek
                            </div>
                        </div>
                    </div>
                    <div className="a-award-content-4">
                        <img src={Award} className="a-award-img" alt=""/>
                        <div className=".a-award-text">
                            <h4 className="a-award title">Spring</h4>
                            <div className="a-award-desc">
                                Spring ist  eine Java-Softwarebibliothek
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 export default About;