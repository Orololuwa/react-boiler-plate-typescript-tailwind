import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

const Header = (): JSX.Element => {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastKnownScrollPosition = 0;
    let newScrollPosition = window.scrollY;

    window.addEventListener("scroll", (event) => {
      lastKnownScrollPosition = newScrollPosition;
      newScrollPosition = window.scrollY;

      if (newScrollPosition < 70) {
        setScrollDirection("down");
      } else if (newScrollPosition > lastKnownScrollPosition) {
        setScrollDirection("down");
      } else if (lastKnownScrollPosition > newScrollPosition) {
        setScrollDirection("up");
      }
    });
  }, [scrollDirection]);

  return (
    <>
      <Navbar />
      {scrollDirection === "down" && <NavbarMobile />}
    </>
  );
};

export default Header;
