import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import MeetOurTeam from "../components/MeetOurTeam";
import OurServices from "../components/OurServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs />
      <OurServices />
      <MeetOurTeam />
      <Footer />
    </div>
  );
};

export default Home;
