import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import React, { useEffect, useState } from 'react';



const CheckoutForm = ({ product }) => {

    const [Error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setprocessing] = useState(false)
    const [success, setSuccess] = useState('')
    const [transactionid, setTransactionid] = useState('')

    const { price, email, userName,_id } = product;

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        if (price) {
            fetch("http://localhost:5000/create-payment-intent", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ price }),
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

        setSuccess('')
        setprocessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email,
                    },
                },
            },
        );

        if (confirmError) {
            setError(confirmError.message);
            return
        }

        if (paymentIntent.status === "succeeded") {
            setSuccess('Congrats! your pament');
            setTransactionid(paymentIntent.id);
            const payment ={
                price,
                transactionId:paymentIntent.id,
                email,
                bookingId:_id
             }
            fetch('http://localhost:5000/payments',{
                method: "POST",
                headers: {
                  "Content-Type": "application/json" ,
                //   authorization: `bearer ${localStorage.getItem('accessToken')}`
                  },
                body: JSON.stringify(payment),
            })
            .then(res=>res.json())
            .then(data => {
                console.log(data);
                setSuccess('Congrats! your pament');
                setTransactionid(paymentIntent.id);
            })
        }
    }

    return (
        <>

            {
                success ? ' ' : <form onSubmit={handleSubmit}>
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


                    <button type="submit" className="btn btn-success mt-4" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>


                </form>
            }



            <p className="text-danger">{Error}</p>

            {
                success && <div>
                    <strong className='text-success  mt-3'>{success}</strong>
                    <p>Your TransactionId {transactionid}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;