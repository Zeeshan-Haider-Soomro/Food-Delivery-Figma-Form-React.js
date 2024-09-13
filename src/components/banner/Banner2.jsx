import './banner2.css'


const Banner2 = () => {
  return (
    <div className='banner2-wrapper'>
        <div className='title-wrapper'>
        <h2>MORE THAN <span className="thousands">10,000</span> DISHES <br /> TO ORDER!</h2>
        <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>
        </div>
        <div className='main-wrapper'>
            <div className='card'>
                <img src="../../assets/images/card1.png" alt="" />
                <p className='card-title'>Pizza</p>
            </div>
            <div className='card'>
            <img src="../../assets/images/card2.png" alt="" />
            <p className='card-title'>Burger</p>
            </div>
            <div className='card'>
            <img src="../../assets/images/card3.png" alt="" />
            <p className='card-title'>Sushi</p>
            </div>
            <div className='rectangle-card'>
                <h3>Find deals, free delivery, and more from our restaurant partners.</h3>
                <img src="../../assets/images/card4.png" alt="" />
            </div>
        </div>
        <div className='main-wrapper2'>
            <div className='rectangle-card'>
                <img src="../../assets/images/Vector (2).png" alt="" />
                <h3>Find deals, free delivery, and more from our restaurant partners.</h3>
            </div>
            <div className='card'>
                <img src="../../assets/images/card5.png" alt="" />
                <p className='card-title'>Pasta</p>
            </div>
            <div className='card'>
            <img src="../../assets/images/card6.png" alt="" />
            <p className='card-title'>Salad</p>
            </div>
            <div className='card'>
            <img src="../../assets/images/card7.png" alt="" />
            <p className='card-title'>Desserts</p>
            </div>
        </div>
    </div>
  )
}

export default Banner2