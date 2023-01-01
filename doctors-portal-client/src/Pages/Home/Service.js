import React from 'react';

const Service = ({service}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl py-4">
            <figure className="px-10 pt-10">
                <img src={service.img} alt={service.name} className="rounded-xl w-20 h-20" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;