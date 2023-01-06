import React from 'react';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RetrievePassword = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    let signInError;
    if (error) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    if (sending) {
        return <Loading></Loading>
    }

    const onSubmit = async(data) => {
        // console.log(data);
        await sendPasswordResetEmail(data.email);
        toast('Send reset password Email!');
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Retrieve Password</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /^[a-z0-9+_.-]+@[a-z]+\.[a-z]{3}$/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <input
                            className='btn w-full max-w-xs mt-3'
                            type="Submit"
                            value="Reset"
                            readOnly
                        />
                    </form>

                    <p className='text-center'><small>New to Doctors Portal? <Link to="/signup" className='text-accent'>Create New Account</Link></small></p>
                    <p className='text-center'><small>Already have an account? <Link to="/login" className='text-accent'>Please login</Link></small></p>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RetrievePassword;