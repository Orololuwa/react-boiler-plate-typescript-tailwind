import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "components/drawer";
import { IoMenuOutline } from "react-icons/io5";

const NavbarMobile = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const toggleSideDrawerShow = () => {
    setShowSideDrawer(true);
  };

  return (
    <>
      <Drawer
        className="bg-white lg:hidden "
        isOpen={showSideDrawer}
        onClose={() => setShowSideDrawer(false)}
      >
        <span>...side nav</span>
      </Drawer>
      <nav className="flex lg:hidden justify-between items-center h-16 text-black py-6 px-4 bg-primary  fixed top-0 left-0 z-50 w-full">
        <Link to="/" className="p-2 w-max h-max text-sm">
          Logo
        </Link>
        <div>
          <IoMenuOutline
            className="cursor-pointer lg:hidden"
            onClick={toggleSideDrawerShow}
            size={25}
          />
        </div>
      </nav>
    </>
  );
};

export default NavbarMobile;
