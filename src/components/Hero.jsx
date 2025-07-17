import { Award, Calendar, Phone } from "lucide-react";
import blueLine from "../assets/png/blue line.png";
import { sliderAssets } from "../../data";
import { HeroSlider } from "./HeroSlider";

const Hero = () => {
  return (
    <section id="home" className="relative w-full">
      <HeroSlider images={sliderAssets} />
      <div className="container mx-auto px-6 mt-10 ">
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white z-20">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Your Trusted Legal and Business Advisory Partner
              <br />
              <div className="relative mb-10 w-full">
                <span> in the Energy Sector.</span>
                <img
                  src={blueLine}
                  alt=""
                  className="absolute right-1/2 translate-x-[130px] -translate-y-[] w-52 md:translate-x-[250px] md:w-96 hidden md:block"
                />
              </div>
            </h1>

            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Boutique legal expertise for organisations navigating Nigeria’s
              dynamic oil &amp; gas, power, mining, and maritime industries.
              {/* Expert Legal Solutions. */}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-5">
            <a href="">
              <button className="flex items-center rounded-md border border-gray-300 text-white font-semibold hover:bg-black/50 px-8 py-3 bg-primary-clr transition duration-300 cursor-pointer">
                Explore Our Services
              </button>
            </a>
            {/* <button className="flex items-center rounded-md border border-gray-300 text-white font-semibold hover:bg-black/50 px-8 py-3 bg-transparent cursor-pointer">
              <Phone className="w-5 h-5 mr-2" />
              Call +234 906 049 0067
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
