import homeAshish from '../imgs/homeAshish.jpg'
import './styles/Home.css'
const Home = () => {
    return(
        <div>
            <div className={'jumbotron'}>
                <img src={homeAshish} className={'homeImage'}/>
            </div>
        </div>
    )
}

export default Home;