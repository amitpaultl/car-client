import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import React, { useEffect, useState } from 'react';



const CheckoutForm = ({product}) => {

    const [Error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const {price} = product;

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
       if(price){
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
              "Content-Type": "application/json" ,
              // authorization: `bearer ${localStorage.getItem('accessToken')}`
              },
            body: JSON.stringify({price}),
          })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
       }
    }, [price]);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
        } else {
            setError('')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="btn btn-success mt-4" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className="text-danger">{Error}</p>
        </>
    );
};

export default CheckoutForm;