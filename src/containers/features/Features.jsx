import './features.css';

const featureData = [
  {
    title: "Improving end distrusts instantly",
    description: "From they fine john he give of rich he. They age and draw ms like. Improving end distrusts may instantly was household applauded."
  },
  {
    title: "Become the tended active",
    description: "Considered sympathetic ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
  },
  {
    title: "Message or am nothing",
    description: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
  },
  {
    title: "Really boy law county",
    description: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
  }
];

const Features = () => {
  return (
    <div className="features-container">
      {/* Left Heading */}
      <div className="features-left">
        <h1>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p className="cta-text">Request Early Access to Get Started</p>
      </div>

      {/* Right Features List */}
      <div className="features-right">
        {featureData.map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="wgpt3-line"></div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
