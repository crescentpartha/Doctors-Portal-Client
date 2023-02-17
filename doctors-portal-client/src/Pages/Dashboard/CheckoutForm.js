import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe(); // don't know, process data of which user
    const elements = useElements(); // get credit card data to process
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { price } = appointment;

    useEffect(() => {
        fetch('https://doctors-portal-server-crescentpartha.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => {
            if (data?.clientSecret) {
                setClientSecret(data.clientSecret);
            }
        });
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            // console.log(error.message);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        // setCardError(error?.message || ''); // In one line
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
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;