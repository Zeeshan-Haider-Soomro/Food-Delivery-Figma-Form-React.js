import './banner3.css'

const Banner3 = () => {
  return (
    <div className="banner3-wrapper">
        <h1>How To Order?</h1>
        <div className='main-wrappers'>
            <div className='card'>
            <h1 className='orangeCount'>01</h1>
            <img src="../../assets/images/card7.png" alt="" />
            <p className='card-title'>Pizza</p>
            </div>
            <div className='card'>
            <h1 className='orangeCount'>02</h1>
            <img src="../../assets/images/card8.png" alt="" />
            <p className='card-title'>Burger</p>
            </div>
            <div className='card'>
            <h1 className='orangeCount'>03</h1>
            <img src="../../assets/images/card9.png" alt="" />
            <p className='card-title'>Sushi</p>
            </div>
            <div className='card'>
            <h1 className='orangeCount'>04</h1>
            <img src="../../assets/images/card10.png" alt="" />
            <p className='card-title'>Sushi</p>
            </div>
        </div>
    </div>
  )
}

export default Banner3