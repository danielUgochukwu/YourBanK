import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { logo, navList } from "../constants";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useGSAP } from "@gsap/react";
import gsap, { CSSPlugin } from "gsap";

gsap.registerPlugin(CSSPlugin);

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useGSAP(() => {
    if (mobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        duration: 0.5,
        x: 0,
        opacity: 1,
        display: "block",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        duration: 0.5,
        x: "100%",
        opacity: 0,
        display: "none",
      });
    }
  }, [mobileMenuOpen]);

  return (
    <header className="py-8 px-16 bg-headerBg bg-contain bg-no-repeat">
      <div className="flex items-center justify-between bg-gray-11 p-6 border border-gray-15 rounded-full">
        <div className="flex-center">
          <img src={logo} alt="logo" className="w-28 lg:w-36" />
        </div>
        <nav className="hidden items-center w-full lg:flex">
          <ul className="flex flex-1 justify-center">
            {navList.map((item, i) => (
              <li
                key={i}
                className="text-base font-normal py-2 px-4 hover:bg-gray-15 hover:rounded-full"
              >
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
          <div className="flex">
            <Link to="/sign-up">
              <button className="mr-4 border border-gray-20 py-2 px-4 rounded-full hover:bg-primary-60 hover:text-black transform duration-300 ease-in-out">
                Sign Up
              </button>
            </Link>
            <Link to="/sign-in">
              <button className="btn">Log In</button>
            </Link>
          </div>
        </nav>
        <div
          className="flex-center py-2 px-4 rounded-full bg-primary-60 cursor-pointer lg:hidden"
          onClick={toggleMobileMenu}
        >
          <HiOutlineMenuAlt3 className="text-gray-10 text-3xl " />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-screen w-2/3 bg-gray-11 border-l border-gray-15 z-10 transform translate-x-full p-6 lg:hidden"
      >
        <div className="flex justify-end">
          <HiOutlineX
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
        <ul className="mt-10">
          {navList.map((item, i) => (
            <li key={i} className="text-xl p-4">
              {toggleMobileMenu}
              <Link to={`/${item.toLocaleLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Link to={`/sign-up`}>
            <button className="w-full mb-4 border border-gray-20 py-2 px-4 rounded-full hover:bg-primary-60 hover:text-black transform duration-300 ease-in-out">
              Sign Up
            </button>
          </Link>
          <Link to={`/sign-in`}>
            <button className="w-full btn">Log In</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
