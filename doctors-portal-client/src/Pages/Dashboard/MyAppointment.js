import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://doctors-portal-server-crescentpartha.vercel.app/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setAppointments(data);
                });
        }
    }, [user, navigate]);

    return (
        <div>
            <h2 className='text-lg font-bold mb-2'>My {appointments.length > 1 ? 'Appointments:' : 'Appointment:'} <span className='text-purple-500'>{appointments.length}</span></h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction Id: <p><span className='text-success'>{a.transactionId}</span></p></p>
                                    </div>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;