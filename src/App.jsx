import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="w-full h-28 relative z-10">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
}

export default App;
