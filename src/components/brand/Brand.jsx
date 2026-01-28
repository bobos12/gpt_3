import './brand.css';
import shopify from '../../assets/shopify.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import google from '../../assets/google.png';
const Brand = () => {
  return (
    <div className='brand-container'>
        <div>
            <img src={google} alt="google logo" className='google-img'/>
            <img src={shopify} alt="shopify logo" />
            <img src={slack} alt="slack logo" />
            <img src={atlassian} alt="atlassian logo" />
            <img src={dropbox} alt="dropbox logo" />
        </div>
    </div>
  )
}

export default Brand
