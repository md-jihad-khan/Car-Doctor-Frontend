import banner1 from "../assets/images/banner/1.jpg";
import banner2 from "../assets/images/banner/2.jpg";
import banner3 from "../assets/images/banner/3.jpg";
import banner4 from "../assets/images/banner/4.jpg";
import banner5 from "../assets/images/banner/5.jpg";
import banner6 from "../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="md:w-10/12 mx-auto font-inter ">
      <div className="carousel w-full h-[calc(100vh-122px)]">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src={banner5}
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 0%)] w-full h-full flex flex-col justify-center rounded-lg">
            <div className=" ml-10 lg:ml-20 space-y-4 md:w-1/2">
              <h3 className="font-bold text-4xl lg:text-7xl">
                Affordable Price For Car Servicing
              </h3>
              <p className="text-gray-400">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn btn-outline  text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-5 bottom-5 right-5">
            <a
              href={"#slide6"}
              className="btn btn-circle hover:bg-[#FF3811] border-none"
            >
              ❮
            </a>
            <a
              href={"#slide2"}
              className="btn btn-circle hover:bg-[#FF3811] border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={banner6}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 0%)] w-full h-full flex flex-col justify-center rounded-lg">
            <div className=" ml-10 lg:ml-20 space-y-4 md:w-1/2">
              <h3 className="font-bold text-4xl lg:text-7xl">
                Affordable Price For Car Servicing
              </h3>
              <p className="text-gray-400">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn btn-outline  text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-5 bottom-5 right-5">
            <a
              href="#slide1"
              className="btn btn-circle hover:bg-[#FF3811] border-none"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle hover:bg-[#FF3811] border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={banner1}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 0%)] w-full h-full flex flex-col justify-center rounded-lg">
            <div className=" ml-10 lg:ml-20 space-y-4 md:w-1/2">
              <h3 className="font-bold text-4xl lg:text-7xl">
                Affordable Price For Car Servicing
              </h3>
              <p className="text-gray-400">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn btn-outline  text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-5 bottom-5 right-5">
            <a
              href="#slide2"
              className="btn btn-circle hover:bg-[#FF3811] border-none"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle hover:bg-[#FF3811] border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner2} className="w-full object-cover rounded-lg" />
          <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 0%)] w-full h-full flex flex-col justify-center rounded-lg">
            <div className=" ml-10 lg:ml-20 space-y-4 md:w-1/2">
              <h3 className="font-bold text-4xl lg:text-7xl">
                Affordable Price For Car Servicing
              </h3>
              <p className="text-gray-400">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn btn-outline  text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-5 bottom-5 right-5">
            <a
              href="#slide3"
              className="btn btn-circle hover:bg-[#FF3811] border-none"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle hover:bg-[#FF3811] border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={banner3} className="w-full object-cover rounded-lg" />
          <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 0%)] w-full h-full flex flex-col justify-center rounded-lg">
            <div className=" ml-10 lg:ml-20 space-y-4 md:w-1/2">
              <h3 className="font-bold text-4xl lg:text-7xl">
                Affordable Price For Car Servicing
              </h3>
              <p className="text-gray-400">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn btn-outline  text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-5 bottom-5 right-5">
            <a
              href="#slide4"
              className="btn btn-circle hover:bg-[#FF3811] border-none"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle hover:bg-[#FF3811] border-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={banner4} className="w-full object-cover rounded-lg" />
          <div className="absolute text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 0%)] w-full h-full flex flex-col justify-center rounded-lg">
            <div className=" ml-10 lg:ml-20 space-y-4 md:w-1/2">
              <h3 className="font-bold text-4xl lg:text-7xl">
                Affordable Price For Car Servicing
              </h3>
              <p className="text-gray-400">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn btn-outline  text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-5 bottom-5 right-5">
            <a
              href="#slide5"
              className="btn btn-circle hover:bg-[#FF3811] border-none"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle hover:bg-[#FF3811] border-none"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
