import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="pt-10">
      <div className="text-center space-y-4  mx-auto">
        <h3 className="font-bold text-orange-500">Service</h3>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p className="text-sm text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
