import Button2 from "../button/Button2"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-design">
            <div className="setting2">
            <img src="../../assets/images/logo.png" alt="" />
            <Button2/>
            </div>
            <div className="setting">
                <h2>Quick links</h2>
                <p>Features</p>
                <p>Food Menu</p>
                <p>Offer</p>
                <p>Offer</p>
                <p>Rider</p>
            </div>
            <div className="setting">
            <h2>Get to Know Us</h2>
                <p>Gift Cards</p>
                <p>DoorDash Stories</p>
                <p>LinkedIn</p>
                <p>Glassdoor</p>
                <p>Accessibility</p>
            </div>
            <div className="setting">
            <h2>News</h2>
                <p>Blog</p>
                <p>FAQ</p>
                <p>Lift Media </p>
                <p>Press</p>
                <p>Presse kit</p>
            </div>
            <div className="setting">
            <h2>Contact</h2>
                <p>WhatsApp</p>
                <p>Support 24</p>
            </div>
        </div>
        <div className="footer-design">
            <div>© 2023 Zeeshan Haider Soomro.All right reserved</div>
            <div className="latjao">
                <p>Privacy</p>
                <p>Policy</p>
                <p>Terms</p>
                <p>Services</p>
            </div>
        </div>
    </div>
  )
}

export default Footer