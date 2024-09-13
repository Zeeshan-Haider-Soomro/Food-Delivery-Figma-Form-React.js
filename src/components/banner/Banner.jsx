import Button from "../button/button"
import Button2 from "../button/Button2";
import "./banner.css"

const Banner = ({data}) => {
    const {title,subTitle,buttonText,imgUrl} = data
    console.log(data);
    
  return (
    <div className="banner-wrapper">
        <div className="text-wrapper">
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <div className="input-wrapper">
            <input type="text" placeholder="Enter your delivery location"/>
            <Button text={buttonText}/>
            </div>
            <div>
                <Button2/>
            </div>
        </div>
        <div className="img-wrapper">
            <img src={imgUrl} />
        </div>
    </div>
  )
}

export default Banner