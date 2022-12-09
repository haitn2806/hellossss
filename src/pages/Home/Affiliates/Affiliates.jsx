import './Affiliates.css';
import {FaHotel, FaPlane, FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcPaypal} from 'react-icons/fa';
import {BsPeopleFill} from 'react-icons/bs';
import {IoRestaurant} from 'react-icons/io5'

function Affiliates() {
    return ( 
        <div className="affiliates">
            <div className='affiliates-title'>
                <h1 className='affiliates-h1'>Affiliates</h1>  
                <h2>Sponsors accompany us</h2>
            </div>
            <div className="affiliates-main">
                <span className='affiliates-list'>
                    <FaHotel className='affiliates-icon' />
                    <p>YoLo Wa</p>
                </span>
                <span className="affiliates-list">
                    <IoRestaurant className='affiliates-icon' />
                    <p>Restaurant</p>
                </span>
                <span className='affiliates-list'>
                    <FaPlane className='affiliates-icon' />
                    <p>Vietnam Airlines</p>
                </span>
                <span className='affiliates-list'>
                    <BsPeopleFill className='affiliates-icon' />
                    <p>Experts</p>
                </span>
                <span className='affiliates-list'>
                    <FaCcVisa className='affiliates-icon' />
                    <p>Visa</p>
                </span>
                <span className='affiliates-list'>
                    <FaCcMastercard className='affiliates-icon' />
                    <p>MasterCard</p>
                </span>
                <span className='affiliates-list'>
                    <FaCcDiscover className='affiliates-icon' />
                    <p>Discover</p>
                </span>
                <span className="affiliates-list">
                    <FaCcPaypal className='affiliates-icon'/>
                    <p>Paypal</p>
                </span>
            </div>
            <p>Sincere thanks to the sponsors who have accompanied us to create great tours.</p>
        </div>
    );
}

export default Affiliates;