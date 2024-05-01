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
    <div className="pt-10 w-10/12 mx-auto">
      <div className="text-center space-y-4  mx-auto">
        <h3 className="font-bold text-[#FF3811]">Service</h3>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p className="text-sm text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center py-6">
        <button className="btn btn-outline font-inter font-semibold text-[#FF3811] ">
          More Services
        </button>
      </div>
    </div>
  );
};

export default OurServices;
