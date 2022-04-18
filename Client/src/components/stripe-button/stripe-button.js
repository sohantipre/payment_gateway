import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import Axios from "axios";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HYBi2B7d9YeuXUbeNjmehiOvakucCVVHy90PPW4bIW6qu3M8CTPTkuNn7EFNB4TL4ToYBoE7hIzJRfPr7VJJ4EA003YSYEj7P'

    const onToken = token => {
        const data =  token.email;
        Axios.post("/mail", {data} ).then((res) => console.log("success")).catch((e) => console.log(e));
        console.log(token.email);
        alert('Payment Successful')
    }


    return (
        <StripeCheckout
            label='Donate Now'
            name='CARE CLUB'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description='Creating a brighter tomorrow :)'
            amount={priceForStripe}
            panelLabel='Donate Now '
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton