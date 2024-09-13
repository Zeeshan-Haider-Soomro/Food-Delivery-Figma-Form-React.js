import Button from "../button/button"
import "./header.css"

const Header = () => {
  return (
    <div className="header-wrapper flexation">
        <div>
            <img src="../../assets/images/logo.png" alt="" />
        </div>
        <div className="flexation gapation">
            <p>Restaurants</p>
            <p>Recipes</p>
            <p>About</p>
            <p>Page <img src="../../assets/images/Vector 1.png" alt="" /></p>
        </div>
        <div className="flexation gapation">
            <h3>Login</h3>
            <Button text="Sign Up"/>
        </div>
    </div>
  )
}

export default Header