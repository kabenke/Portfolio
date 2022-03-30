import React from 'react';
import "./copyrigth.css"
const CopyRigth = () => {
    return (
        <div>
            <div className="f">

                <footer >
                    <div className="f-desc">
                       &copy; 2020 solution provider DE,Inc All rigths reserved.
                    </div>
                    <div className="f-policy">
                        <ul className="f-list">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Accessibility</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default CopyRigth;