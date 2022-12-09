import './PaymentGate.css';
import {FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcPaypal} from 'react-icons/fa';

function PaymentGate() {
    return ( 
        <div className="paymentgate">
            <div className='pg-title'>
                <h1 className='pg-h1'>Payment GateWay</h1>  
                <h2>Easy payment, get thousands of incentives</h2>
            </div>
            <div className="pg-main">
                <ul>
                    <li>
                        <span>Visa/Master Card/... :</span>
                        <FaCcVisa className='method-option'/>
                        <FaCcMastercard className='method-option'/>
                        <FaCcDiscover className='method-option'/>
                    </li>
                    <p>&emsp;Visa cards are payment cards that use the Visa network. 
                        Financial institutions partner with Visa to use the company's network. 
                        Visa cards come with a 16-digit account number, microchip, and magnetic stripe. 
                        Types of Visa cards include credit cards, debit cards, prepaid cards, and gift cards.</p>
                    <li>
                        <span>Paypal:</span>
                        <FaCcPaypal className='method-option'/>
                    </li>
                    <p>&emsp;PayPal is an online payment system that makes paying for things online and sending and receiving money safe and secure. 
                        When you link your bank account, credit card or debit card to your PayPal account, 
                        you can use PayPal to make purchases online with participating stores.</p>
                </ul>
            </div>
        </div>
    );
}

export default PaymentGate;