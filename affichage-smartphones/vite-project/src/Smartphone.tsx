import './Smartphone.scss'
import PropTypes from 'prop-types'
interface SmartphoneProps {
    brand : string;
    color : string;
    ram : number;
    isRecon : boolean;
}
const Smartphone = ({brand, color, ram, isRecon} : SmartphoneProps) => {
    return (
        <div className='phone'>
        <h2 className='brand'>{brand}</h2>
        <p className='desc'>color : {color} - nombre de Go de RAM : {ram} {isRecon ? <p className='ok-recon'> Le smartphone a été reconditionné</p> : <p className='not-ok-recon'> Le smartphone n'a pas été reconditionné</p>} </p>
        </div>
    )
}
Smartphone.propTypes = {
    brand : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
    ram : PropTypes.number.isRequired,
    isRecon : PropTypes.bool.isRequired
}
export default Smartphone