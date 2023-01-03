import React from 'react';
// import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';

const AppointmentBanner = ({date, setDate}) => {

    return (
        <div style={{background: `url(${bg})`, borderRadius: '5px'}} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:px-10">
                <img src={chair} alt="Dentist Chair" className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    {/* <p>You have selected: {format(date, 'PP')}</p> */}
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;