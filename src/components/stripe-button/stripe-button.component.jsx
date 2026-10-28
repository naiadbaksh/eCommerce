import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J8u2qLIiXsvpWwVD5hyX7KsX7K0q6X73FT8q42TIgtspnHOxAKMb6YSAfDSL1Lkn0vN3pUVZDDI4TZlpDyXbyT8004Bl9ggGC';
    const onToken = token => {
        alert('Payment Successful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='eCommerce'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;