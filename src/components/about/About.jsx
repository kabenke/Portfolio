import React from "react";
import "./about.css"
import Front from  "../../img/1.png"
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
          <div className="a-rigth">
                <p className="a-sub"> "Just because something works doesn't mean it shouldn't be improved"</p>
                <div className="a-desc"> B.Sc. Informatik (TU Dortmund). MES & Software Engineer bei BASF.
                    Ich verbinde Industrie-4.0-Systeme mit moderner Software-Architektur.
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
                            <h4 className="a-award title">Java</h4>
                            <div className="a-award-desc">
                                Objektorientierte Programmiersprache für Backend und Industrie-Software
                            </div>
                        </div>
                    </div>
                    <div className="a-award-content-3">
                        <img src={Award} className="a-award-img" alt=""/>
                        <div className=".a-award-text">
                            <h4 className="a-award title">C#</h4>
                            <div className="a-award-desc">
                                Programmiersprache für .NET-Anwendungen und MES-Integration
                            </div>
                        </div>
                    </div>
                    <div className="a-award-content-4">
                        <img src={Award} className="a-award-img" alt=""/>
                        <div className=".a-award-text">
                            <h4 className="a-award title">MES</h4>
                            <div className="a-award-desc">
                                Manufacturing Execution Systems — Fertigungsleitsysteme
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 export default About;