import './styles/Checkout.css'
import product1 from '../../imgs/product1.jpg'
import purchaseProtection from '../../imgs/purchaseProtection.png'

const Checkout = () => {
    return (
        <div className={'checkout'}>
            <div className={'shoppingCart'}>
                <div className={'checkoutTitle'}>Shopping Cart</div>
                <div className={'checkoutCard'}>
                    <div>
                        <img src={product1}/>
                    </div>
                    <div>
                        <div>
                            HP All in One PC 20.7-inch(52.6 cm) FHD with Alexa Built-in (Dual Core Intel Celeron
                            J4025/4GB/1TB HDD/Win 10/MS Office 2019/USB Wired Keyboard & Mouse), 21-b0707in
                        </div>
                    </div>
                </div>
            </div>
            <div className={'sidebar'}>
                <div>
                    <img src={purchaseProtection}/>
                </div>
            </div>
        </div>
    )
}

export default Checkout;