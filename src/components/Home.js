import homeAshish from '../imgs/homeAshish.jpg'
import './styles/Home.css'
import CardHome from "./homepageComponents/CardHome";

import homeProducts from '../imgs/homeProducts.jpg';
import furniture from '../imgs/furniture.jpg';
import dailyEssentials from '../imgs/dailyEssentials.jpg'
import clothingEssentials from '../imgs/clothingEssentials.jpg'

const Home = () => {
    return(
        <div className={'home'}>
            <div className={'jumbotron'}>
                <img src={homeAshish} className={'homeImage'}/>
            </div>
            <div className={'cardContainer'}>
                <div className={'cardContainerOne'}>
                    <CardHome title={'Top rated, premium quality | Amazon Brands & more'}
                              image1={homeProducts} image2={furniture} image3={dailyEssentials}
                              image4={clothingEssentials} link={'See more...'}/>
                    <CardHome title={'Top rated, premium quality | Amazon Brands & more'}
                              image1={homeProducts} image2={furniture} image3={dailyEssentials}
                              image4={clothingEssentials} link={'See more...'}/>
                    <CardHome title={'Top rated, premium quality | Amazon Brands & more'}
                              image1={homeProducts} image2={furniture} image3={dailyEssentials}
                              image4={clothingEssentials} link={'See more...'}/>
                </div>
                <div className={'cardContainerTwo'}>
                    <CardHome title={'Top rated, premium quality | Amazon Brands & more'}
                              image1={homeProducts} image2={furniture} image3={dailyEssentials}
                              image4={clothingEssentials} link={'See more...'}/>
                    <CardHome title={'Top rated, premium quality | Amazon Brands & more'}
                              image1={homeProducts} image2={furniture} image3={dailyEssentials}
                              image4={clothingEssentials} link={'See more...'}/>
                    <CardHome title={'Top rated, premium quality | Amazon Brands & more'}
                              image1={homeProducts} image2={furniture} image3={dailyEssentials}
                              image4={clothingEssentials} link={'See more...'}/>
                    <CardHome title={'Top rated, premium quality | Amazon Brands & more'}
                              image1={homeProducts} image2={furniture} image3={dailyEssentials}
                              image4={clothingEssentials} link={'See more...'}/>
                </div>
            </div>
        </div>
    )
}

export default Home;