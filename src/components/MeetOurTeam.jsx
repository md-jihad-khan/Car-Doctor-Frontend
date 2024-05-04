import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import team1 from "../assets/images/team/1.jpg";
import team2 from "../assets/images/team/2.jpg";
import team3 from "../assets/images/team/3.jpg";

const MeetOurTeam = () => {
  return (
    <div className="pt-10 pb-5 w-10/12 mx-auto">
      <div className="text-center space-y-4  mx-auto">
        <h3 className="font-bold text-[#FF3811]">Team</h3>
        <h2 className="text-4xl font-bold">Meet Our Team</h2>
        <p className="text-sm text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {/* 1 */}
        <div className="card text-center bg-base-100 border">
          <figure className="p-4">
            <img src={team1} className="rounded-xl w-full h-52 object-cover" />
          </figure>
          <div className="card-body pt-0 p-4 font-inter">
            <h2 className=" font-bold text-2xl text-[#FF3811]">
              Car Engine Plug
            </h2>
            <p>Engine Expert</p>

            <div className="flex items-center justify-center text-3xl gap-3">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="card text-center bg-base-100 border">
          <figure className="p-4">
            <img src={team2} className="rounded-xl w-full h-52 object-cover" />
          </figure>
          <div className="card-body pt-0 p-4 font-inter">
            <h2 className=" font-bold text-2xl text-[#FF3811]">
              Car Engine Plug
            </h2>
            <p>Engine Expert</p>

            <div className="flex items-center justify-center text-3xl gap-3">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
        {/* 1 */}
        <div className="card text-center bg-base-100 border">
          <figure className="p-4">
            <img src={team3} className="rounded-xl w-full h-52 object-cover" />
          </figure>
          <div className="card-body pt-0 p-4 font-inter">
            <h2 className=" font-bold text-2xl text-[#FF3811]">
              Car Engine Plug
            </h2>
            <p>Engine Expert</p>

            <div className="flex items-center justify-center text-3xl gap-3">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
