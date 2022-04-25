import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services">
      <h1>Services</h1>
      <div className="services-container">
        {services.map((service) => (
          <div className="service">
            <img src={service?.picture} alt="" />
            <h2>{service?.name}</h2>
            <p>{service?.about}</p>
            <button>Click</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
