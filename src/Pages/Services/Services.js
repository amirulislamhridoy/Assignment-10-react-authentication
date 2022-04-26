import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useServices from "../../hook/useServices";
import "./Services.css";

const Services = () => {
  // const [services, setServices] = useState([]);
  const [services] = useServices()
  // console.log(services);

  // useEffect(() => {
  //   fetch("services.json")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="services-container">
        {services?.map((service) => (
          <div className="service" key={service._id}>
            <img src={service?.picture} alt="" />
            <h2>{service?.name}</h2>
            <p>{service?.about}</p>
            <Link to={`/checkout/${service._id}`}>
            <button>Check Out</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
