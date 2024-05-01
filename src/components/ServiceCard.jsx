import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  return (
    <div className="card  bg-base-100 border">
      <figure className="p-4">
        <img
          src={service.img}
          className="rounded-xl w-full h-52 object-cover"
        />
      </figure>
      <div className="card-body pt-0 p-4 font-inter">
        <h2 className=" font-bold text-2xl">{service.title}</h2>
        <div className="card-actions font-bold text-[#FF3811]">
          <p>Price: ${service.price}</p>{" "}
          <button className="">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
