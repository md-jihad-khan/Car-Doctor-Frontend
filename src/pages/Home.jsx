import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import OurServices from "../components/OurServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs />
      <OurServices />
      <Footer />
    </div>
  );
};

export default Home;
