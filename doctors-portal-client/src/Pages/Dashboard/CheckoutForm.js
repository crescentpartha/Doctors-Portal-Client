import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
    const stripe = useStripe(); // don't know, process data of which user
    const elements = useElements(); // get credit card data to process

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return; 
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return; 
        }
    }

    return (
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
            <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;