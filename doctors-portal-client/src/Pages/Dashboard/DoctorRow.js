import React from 'react';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    // console.log(doctor);
    const { name, img, specialty } = doctor;

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
            <td className='capitalize'>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;