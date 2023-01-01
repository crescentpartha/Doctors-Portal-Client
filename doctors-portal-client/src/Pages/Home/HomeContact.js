import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import bg from '../../assets/images/bg.png';

const HomeContact = () => {
    return (
        <div style={{ background: `url(${bg})`, borderRadius: '5px'}} className='text-center py-10'>
            <h2 className='text-2xl text-accent'>Contact Us</h2>
            <h3 className='text-3xl text-white mb-3'>Stay connected with us</h3>
            <form className='w-80 mx-auto py-3'>
                <input type="text" placeholder="Email Address" className="input input-bordered input-accent w-full max-w-xs mb-3" /> <br />
                <input type="text" placeholder="Subject" className="input input-bordered input-accent w-full max-w-xs mb-3" /> <br />
                <textarea className="textarea textarea-accent w-full mb-3" placeholder="Your message"></textarea> <br />
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </div>
    );
};

export default HomeContact;