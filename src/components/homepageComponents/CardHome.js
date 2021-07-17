import './styles/CardHome.css'

const CardHome = (props) => {

    return (
        <div className={'card'}>
            <div className={'title'}><h3>{props.title}</h3></div>
            <div className={'imageContainer'}>
                <img className={'image'} src={props.image1}/>
                <img className={'image'} src={props.image2}/>
                <img className={'image'} src={props.image3}/>
                <img className={'image'} src={props.image4}/>
            </div>
            <div className={''}>{props.link}</div>
        </div>
    )

}

export default CardHome;