import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`,
            borderRadius: '5px'
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="Doctor" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-3'>Make an Appointment Today</h2>
                <p className='text-white pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores incidunt sit ea nihil dolor animi modi asperiores voluptatum temporibus, iste repellendus placeat deleniti similique culpa necessitatibus ex eveniet. Sunt, iure? Fugit, enim deleniti odit sequi cumque dicta quod nesciunt modi!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;