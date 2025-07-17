import {
  Award,
  Building,
  CheckCircle,
  Gavel,
  Heart,
  Shield,
  Users,
} from "lucide-react";
import React from "react";
import { sectors } from "../../data";

const Sectors = () => {
  return (
    <section id="sectors" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Sectors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We focus exclusively on four key sectors where legal clarity meets
            operational complexity:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow p-5"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <sector.icon className="h-8 w-8 text-primary-clr" />
                </div>
                <div className="text-gray-900 mb-2 font-semibold">
                  {sector.title}
                </div>
                <div className="text-gray-600">{sector.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


// <section className="py-24 bg-gradient-subtle">
    //   <div className="container mx-auto px-6">
    //     <div className="text-center mb-16">
    //       <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
    //         Our Services
    //       </h2>
    //       <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
    //         We focus exclusively on four key sectors where legal clarity meets
    //         operational complexity:
    //       </p>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {sectors.map((sector, index) => (
    //         <div
    //           key={sector.title}
    //           className="group relative overflow-hidden bg-card hover:shadow-elegant transition-all duration-500 border-0 shadow-card hover:scale-105 animate-fade-in"
    //           style={{ animationDelay: `${index * 100}ms` }}
    //         >
    //           <div className="p-8">
    //             <div className="relative z-10">
    //               <div className="flex items-center justify-center w-16 h-16 bg-blue-100  rounded-2xl mb-6 group-hover:animate-float transition-all duration-500">
    //                 <sector.icon className="w-8 h-8 text-primary-clr" />
    //               </div>

    //               <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-primary-glow transition-colors duration-300">
    //                 {sector.title}
    //               </h3>

    //               <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
    //                 {sector.description}
    //               </p>
    //             </div>

    //             {/* Subtle hover gradient overlay */}
    //             <div className="absolute inset-0 bg-gradient-to-br from-accent/5 shadow-2xl to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    //             {/* Decorative border accent */}
    //             <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default Sectors;
