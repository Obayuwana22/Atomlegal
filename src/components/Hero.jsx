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
              Your Partner on
              <br />
              <div className="relative mb-16 w-full">
                <span>the Path to Justice.</span>
                <img
                  src={blueLine}
                  alt=""
                  className="absolute right-1/2 translate-x-[130px] -translate-y-[] w-52 md:translate-x-[250px] md:w-96"
                />
              </div>
            </h1>

            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Expert Legal Solutions. Industry Insight. Trusted Results. At Atom, we deliver comprehensive legal services tailored
              to the complexities of Nigeria’s economic landscape. Whether
              you're navigating regulatory frameworks, closing high-stakes
              transactions, or resolving critical disputes, our team of seasoned
              legal professionals is equipped to guide you from start to finish.
              We operate at the intersection of law, business, and policy across
              energy, maritime, and the public sector.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-5">
            <button className="flex items-center rounded-md bg-primary-clr hover:bg-primary-dull text-white font-semibold px-8 py-3 cursor-pointer">
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </button>
            <button className="flex items-center rounded-md border border-gray-300 text-white font-semibold hover:bg-black/50 px-8 py-3 bg-transparent cursor-pointer">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
