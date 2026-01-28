import React from 'react';
import './possibility.css';
import vrimage from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className="feature-container">
        <div className="feature-top">
            <div className="feature-image">
            <img src={vrimage} alt="VR Experience" />
            <button className="my-apps-btn">My Apps</button>
            </div>
            <div className="feature-text">
            <p className="feature-small-text">Request Early Access to Get Started</p>
            <h1 className="feature-title">The possibilities are beyond your imagination</h1>
            <p className="feature-description">
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
                Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
            <p className="feature-small-text">Request Early Access to Get Started</p>
            </div>
        </div>
        </div>
    );
};

export default Possibility;