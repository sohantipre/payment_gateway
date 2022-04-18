import React from 'react'
import './Home.css';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

const Home = (props) => {
    const Donation = 200; 
    return (
        <div className="background">
            <div className="Homepage">
                <h3 className="upper"><b>“Giving Is Not Just About Making A Donation. <br /> It Is About Making A Difference. ”</b></h3>
                <br />
                <p className="Para">There are many ways to push for much-needed reforms: One way is to make a donation.<br /> It doesn't matter much whether you contribute publicly or in a private way - either way is good. What matters is your true intention.</p>
                {/* <button type="button" id="btn" className="btn btn-outline-dark">Donate ₹500.00/-  </button> */}
            </div>
            <div className="bttn">
                <StripeCheckoutButton className="btn" price={Donation} />
            </div>
        </div>
    )
}

export default Home
