import './header.css';
import headerImage from '../../assets/ai.png';
import peopleImage from '../../assets/people.png';
const Header = () => {
    return (
    <header className="main-header">
      <div className="left">
        <h1 className="main-title">Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p className="main-subtitle">
            Yet bed any for travelling assistance indulgence unpleasing.
            Not thoughts all exercise blessing. 
            Indulgence way everything joy alteration boisterous the attachment.
            Party we years to order allow asked of.
        </p>
        <div className="input-container">
            <input type="email" placeholder="Your Email Address" className="email-input" />
            <button type="button" className="get-started-button">Get Started</button>
        </div>
        <div className="people">
            <img src={peopleImage} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="right">
        <img src={headerImage} alt="header" className="header-img" />
      </div>
    </header>
    );
};

export default Header;