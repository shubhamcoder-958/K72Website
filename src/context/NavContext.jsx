import React, { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";

export const NavbarContext = createContext();
export const NavbarColorContext = createContext();

const NavContext = ({ children }) => {
  const [navColor, setNavColor] = useState("white");
  const [navOpen, setNavOpen] = useState(false);

  const locate = useLocation();
  console.log(locate.pathname);

  useEffect(() => {
    if (locate.pathname === "/projects" || locate.pathname === "/agency") {
      setNavColor("black");
    } else {
      setNavColor("white");
    }
  }, [locate]);

  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      <NavbarColorContext.Provider value={[navColor, setNavColor]}>
        {children}
      </NavbarColorContext.Provider>
    </NavbarContext.Provider>
  );
};

export default NavContext;
