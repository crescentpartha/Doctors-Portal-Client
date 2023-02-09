import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    // console.log(doctor);
    const { name, email, img, specialty } = doctor;

    const handleDelete = email => {
        fetch(`https://doctors-portal-server-crescentpartha.vercel.app/doctor/${email}`, {
            method: 'DELETE', 
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if (data.deletedCount) {
                toast.success(`Dr. ${name} is deleted.`);
                refetch();
            }
        });
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={img} alt={name} />
                        {/* <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt={name} /> */}
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handleDelete(email)} className="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;