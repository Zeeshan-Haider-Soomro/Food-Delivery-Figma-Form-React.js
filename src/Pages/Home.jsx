import Banner from "../components/banner/Banner"
import Banner2 from "../components/banner/Banner2"
import Banner3 from "../components/banner/Banner3"
import Banner4 from "../components/banner/Banner4"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { BannerText1 } from "../utils/constant/bannerText"

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner data={BannerText1}/>
        <Banner2/>
        <Banner3/>
        <Banner4/>
        <Footer/>
    </div>
  )
}

export default Home