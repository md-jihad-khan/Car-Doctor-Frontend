import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logo.svg";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold" : ""
          }
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold" : ""
          }
          to={"/services"}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold" : ""
          }
          to={"/blog"}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-bold" : ""
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 md:w-10/12 mx-auto font-inter py-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link>
          {" "}
          <img className="w-20 md:w-28" src={logo} alt="" />{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-3">
        <FaShoppingBag />
        <FaSearch />
        <Link
          to={"/appointment"}
          className="btn btn-outline text-orange-500 font-inter"
        >
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
