import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    /* Fix Warning: 
        Cannot update a component (`BrowserRouter`) while rendering a different component (`Login`). 
        To locate the bad setState() call inside `Login` 
        [Notes: navigate inside useEffect. That's all]
    */
    useEffect(() => {
        if (gUser || user) {
            // console.log(gUser || user);
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate]);

    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    if (gLoading || loading) {
        return <Loading></Loading>
    }

    const onSubmit = (data) => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

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

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Must be 8 characters or longer'
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: 'Less than or equal to 30 characters'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                                {errors.password?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                            </label>
                        </div>

                        {signInError}
                        <input
                            className='btn w-full max-w-xs mt-3'
                            type="Submit"
                            value="Login"
                            readOnly
                        />
                    </form>

                    <p className='text-center'><small>New to Doctors Portal? <Link to="/signup" className='text-accent'>Create New Account</Link></small></p>
                    <p className='text-center'><small>Forget your password? <Link to="/retrievePassword" className='text-accent'>Reset Password</Link></small></p>

                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;