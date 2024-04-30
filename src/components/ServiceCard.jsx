const ServiceCard = ({ service }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={service.img} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.title}</h2>
        <p>Price: ${service.price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">=></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
