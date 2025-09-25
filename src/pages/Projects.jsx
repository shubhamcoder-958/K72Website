import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "../components/projects/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  
  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_Fromage_08_2692_srgb-1200x1920.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg",
    },
  ];

 
  useEffect(() => {
    gsap.from(".hero", {
      height: "100px",
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        trigger: ".lol",

        start: "top 100%",
        end: "-top 150%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="lg:p-4 p-2">
      <div className="pt-[45vh]">
        <h2 className="font-inter lg:text-[9.5vw] text-7xl uppercase">Projects</h2>
      </div>
      <div className="-lg:mt-20 lol">
        {projects.map((elem, idx) => (
          <div key={idx} className="hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2">
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
