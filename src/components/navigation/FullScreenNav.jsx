import React, { useRef, useContext, useEffect } from "react";
import gsap from "gsap";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);

  const sections = ["WORK", "AGENCY", "CONTACT", "BLOG"];

  const gsapAnimation = () => {
    if (fullScreenRef.current) {
      fullScreenRef.current.style.display = "block";
    }

    const tl = gsap.timeline();
    tl.from(".stairing", { height: 0, duration: 1, stagger: -0.3 })
      .from(fullNavLinksRef.current, { opacity: 0 })
      .from(".link", { opacity: 0, rotateX: 90, stagger: 0.3 })
      .from(".navLink", { opacity: 0 });
  };

  useEffect(() => {
    if (navOpen) {
      gsapAnimation();
    } else {
      if (fullScreenRef.current) {
        fullScreenRef.current.style.display = "none";
      }
    }
  }, [navOpen]);

  return (
    <div
      ref={fullScreenRef}
      className="text-white overflow-hidden h-screen w-full z-50 absolute"
      style={{ display: "none" }}
    >
      {/* Background stairing animation */}
      <div className="h-screen w-full fixed flex">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="stairing h-full w-1/5 bg-black"></div>
          ))}
      </div>

      {/* Navigation */}
      <div ref={fullNavLinksRef} className="relative">
        <div className="navLink flex w-full justify-between lg:p-5 p-2 items-start">
          <div className="w-36">{/* Logo SVG */}</div>
          <div
            onClick={() => setNavOpen(false)}
            className="lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer"
          >
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]" />
            <div className="lg:h-44 h-28 lg:w-1 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]" />
          </div>
        </div>

        <div className="py-36">
          {sections.map((title, i) => (
            <div
              key={i}
              className="link origin-top relative border-t border-white overflow-hidden"
            >
              <h1 className="font-inter text-5xl lg:text-[8vw] text-center lg:leading-[1] lg:pt-10 pt-3">
                {title}
              </h1>
              <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
                <div className="moveX flex items-center">
                  {Array(2)
                    .fill(0)
                    .map((_, idx) => (
                      <React.Fragment key={idx}>
                        <h2 className="whitespace-nowrap font-inter text-[8vw] text-center leading-[1] pt-10">
                          SEE EVERYTHING
                        </h2>
                        <img
                          className="lg:h-32 h-14 rounded-full shrink-0 lg:w-96 w-36 object-cover"
                          src={
                            idx % 2 === 0
                              ? "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                              : "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail-640x290-640x290.jpg"
                          }
                          alt={title}
                        />
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
