import person from "../assets/images/about_us/person.jpg";
import parts from "../assets/images/about_us/parts.jpg";
const AboutUs = () => {
  return (
    <div className="hero my-10 w-10/12 mx-auto">
      <div className="hero-content p-0 flex-col gap-16 lg:gap-5 lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src={person}
            className="w-3/4 object-cover h-[350px] rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            className="w-1/2 absolute h-[200px] object-cover top-1/2 right-5 rounded-lg shadow-2xl border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2 font-inter text-center lg:text-left space-y-4">
          <h3 className="font-bold text-orange-500">About Us</h3>
          <h2 className="text-4xl font-bold">
            We are qualified & of experience in this field
          </h2>
          <p className="text-sm text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-sm text-gray-500">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-orange-500 rounded-none text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
