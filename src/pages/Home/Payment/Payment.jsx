import "./Payment.css";

import {FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcPaypal} from 'react-icons/fa';

function Payment() {
    return ( 
        <div className="payment-wrapper">
            <div className="payment">
                <form action="" method="post" className="form-payment" id="form-1">
                    <h3 className="heading">PAYPAL PRO PAYMENT FORM</h3>
                    <p className="desc">
                        Would you like to enshrine one of our tours? 
                    </p>

                    <div className="spacer"></div>

                    <div className="form-group">
                        <label className="form-label">My tour</label>
                        <div className="my-tour">
                            <ul>
                                <li>
                                    <span>Ha Noi</span>
                                    <span>1500 $</span>
                                </li>
                                <li>
                                    <span>HaLong Bay</span>
                                    <span>1500 $</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="method" className="form-label">Payment method</label>
                        <div className="form-method">
                            <div className="method-options">
                                <div>
                                    <label className="method-p" for="">
                                    </label>
                                    <input name="method" type="radio" value="visa" className="form-control" />
                                    <FaCcVisa className='method-option'/>
                                    <FaCcMastercard className='method-option'/>
                                    <FaCcDiscover className='method-option'/>
                                </div>
                                <div>
                                    <label className="method-p" for="">
                                    </label>
                                    <input name="method" type="radio" value="paypal" className="form-control" />
                                    <FaCcPaypal className='method-option'/>
                                </div>
                            </div>
                            <div className="method-visa">
                                <div className="visa-content">
                                    <label for="payment" className="form-label">Credit Card</label>
                                    <div className="visa-name">
                                        <div>
                                            <input type="text" name='street' className='form-control--payment' />
                                            <span className="form-message--payment">First Name</span>
                                        </div>
                                        <div>
                                            <input type="text" name='city' className='form-control--payment' />
                                            <span className="form-message--payment">Last Name</span>
                                        </div>
                                    </div>
                                    <div className="visa-number">
                                        <div>
                                            <input type="text" name='city' className='form-control--payment' />
                                            <span className="form-message--payment">Credit Card Number</span>
                                        </div>
                                        <div>
                                            <input type="text" name='city' className='form-control--payment' />
                                            <span className="form-message--payment">Security Code</span>
                                        </div>
                                    </div>
                                    <div className="visa-date">
                                        <div>
                                            <input type="text" name='city' className='form-control--payment' />
                                            <span className="form-message--payment">Expiration Month</span>
                                        </div>
                                        <div>
                                            <input type="text" name='city' className='form-control--payment' />
                                            <span className="form-message--payment">Expiration Year</span>
                                        </div>
                                    </div>
                                </div>
                            <div>
                            </div>
                            </div>
                            <div className="method-paypal">
                            </div>
                        </div>
                        <span className="form-message"></span>
                    </div>

                    <div className="form-group">
                        <label for="payment" className="form-label">Buyer Name</label>
                        <div className="buyer-name">
                            <div>
                                <input type="text" name='street' className='form-control--payment' />
                                <span className="form-message--payment">First Name</span>
                            </div>
                            <div>
                                <input type="text" name='city' className='form-control--payment' />
                                <span className="form-message--payment">Last Name</span>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="payment" className="form-label">Buyer Email</label>
                        <input type="text" name='street' className='form-control--payment' placeholder='ex: myname@example.com' />
                        <span className="form-message--payment">example@example.com</span>
                    </div>

                    <div className="form-group">
                        <label for="payment" className="form-label">Shipping address</label>
                        <input type="text" name='street' className='form-control--payment' />
                        <span className="form-message--payment">Street Address</span>
                        <div className="ship-city">
                            <div>
                                <input type="text" name='city' className='form-control--payment' />
                                <span className="form-message--payment">City</span>
                            </div>
                            <div>
                                <input type="text" name='street' className='form-control--payment' />
                                <span className="form-message--payment">State / Province</span>
                            </div>
                        </div>
                        <input type="text" name='postal/zip code' className='form-control--payment' />
                        <span className="form-message--payment">Postal / Zipcode</span>
                    </div>

                    <button className="form-submit">Submit</button>

                </form>
            </div>
        </div>
    );
}

export default Payment;