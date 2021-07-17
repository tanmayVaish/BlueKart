import logo from '../imgs/amazon_PNG11.png'

import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './styles/Header.css'

const Header = () => {

    return (
        <div className={'navbar'}>

            <div className={'navbarOne'}>
                <div className={'logoContainer'}>
                    <img src={logo} className={'logo'}/>
                </div>

                {/*<div className={'locationBar'}>*/}
                {/*    <LocationOnIcon className={'locationIcon'}/>*/}
                {/*    <div className={'location'}>Hello,<span>Select Your Address</span></div>*/}
                {/*</div>*/}

                <div className={'searchBar'}>
                        <select className={'searchList'}>
                            <option>All</option>
                            <option>Deals</option>
                            <option>Alexa Skills</option>
                            <option>Amazon Devices</option>
                            <option>Amazon Fashion</option>
                            <option>Amazon Pantry</option>
                            <option>Appliances</option>
                            <option>Apps and Games</option>
                            <option>Groceries and Gourmet Foods</option>
                            <option>Tools and Home Improvement</option>
                        </select>
                    <input placeholder={'Search'} className={'searchInput'}/>
                    <div className={'searchBtn'}><SearchIcon className={'searchIcon'}/></div>
                </div>

                <div className={'tabs'}>
                    <div className={'tabOne'}>Hello, Sign in <span>Account and Lists</span></div>
                    <div className={'tabTwo'}>Returns<span>& Orders</span></div>
                    <div className={'tabThree'}>
                        <ShoppingCartIcon className={'cartIcon'}/>
                        <span>Cart</span>
                    </div>
                </div>

            </div>

            <div className={'navbarTwo'}>

            </div>

        </div>
    )

}

export default Header;