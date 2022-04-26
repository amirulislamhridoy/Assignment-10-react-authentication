import React from 'react';
import './Checkout.css'
import { useParams } from 'react-router-dom';
import useServices from '../../hook/useServices';

const Checkout = () => {
    const {id} = useParams()
    // console.log(id)
    const [services] = useServices()

    const match = services?.find(service => service._id = id)
    console.log(match)
    return (
        <div className="checkout">
            <img src={match?.picture} alt="" />
            <h2>{match?.name}</h2>
            <p>{match?.about}</p>
        </div>
    );
};

export default Checkout;