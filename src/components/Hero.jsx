import { HiBadgeCheck } from "react-icons/hi";
import { hero02, arrow } from "../constants";

const Hero = () => {
  return (
    <section className="relative py-4 px-8 md:px-12 lg:flex-center">
      {/* Container for the Badge Check and Text */}
      <div className="flex-center flex- flex-col lg:flex-start ">
        {/* Badge Check Container */}

        <div className="flex items-center p-3 space-x-1 bg-gray-15 rounded-full">
          <HiBadgeCheck
            className="text-primary-60 w-4 h-4 md:w-5 md:h-5"
            aria-hidden="true"
          />
          <p className="font-light text-[10px]  text-white sm:text-sm xl:text-base">
            No LLC Required, No Credit Check.
          </p>
        </div>

        {/* Heading and Subheading Container */}
        <div className=" flex flex-row mt-8">
          <h1 className="flex-1 text-center  font-semibold text-2xl leading-9 text-white md:leading-[3.5rem] md:text-5xl lg:text-6xl lg:text-left">
            {" "}
            Welcome to YourBank Empowering Your{" "}
            <br className="block lg:hidden" />{" "}
            <span className="text-primary-60">Financial Journey</span>
          </h1>
        </div>

        <p className=" text-center lg:text-left text-md md:text-lg text-gray-75 mt-4">
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial
          goals. We are committed to delivering personalized and innovative
          services that prioritize our customers needs.
        </p>

        {/* Button Container */}
        <div className="flex justify-center md:justify-start mt-6">
          <button className="btn">Open Account</button>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative w-full mx-auto flex max-lg:mt-16 max-md:justify-center max-md:items-center flex-auto lg:w-full md:w-4/6">
        <img
          src={arrow}
          alt="arrow"
          className="w-[280px] absolute -z-10 -top-1 -right-6 pointer-events-none"
        />
        <img
          src={hero02}
          alt="hero"
          className="max-sm:w-full mx-auto pointer-events-none"
        />
      </div>
    </section>
  );
};

export default Hero;
