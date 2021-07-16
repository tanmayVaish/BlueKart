import logo from '../imgs/B1.png'
import './styles/Header.css'

const Header = () => {

    return (
        <div className={'navbar'}>
            <div className={'navbarOne'}>
                <img src={logo} className={'logo'}/>
                <div className={'searchBar'}>
                    <input/>
                </div>
                <div className={'tabs'}>
                    <div className={'tabOne'}>Hello SignIn</div>
                    <div className={'tabTwo'}>Return and Orders</div>
                    <div className={'tabThree'}>Cart</div>
                </div>
            </div>
            <div className={'navbarTwo'}>

            </div>
        </div>
    )

}

export default Header;