import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState()

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + "/services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    // console.log(services)
    return [services, setServices]
};

export default useServices;