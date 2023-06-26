import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const navs = [
    {
      id: 1,
      link: "home",
      path: "/",
    },
    {
      id: 2,
      link: "tentang kami",
      path: "/tentangkami",
    },
    {
      id: 3,
      link: "layanan kami",
      path: "/layanankami",
    },
    {
      id: 4,
      link: "artikel",
      path: "/artikel",
    },
    {
      id: 5,
      link: "contact us",
      path: "/contactus",
    },
  ];
  return (
    <header className="w-full navShadow">
      <div className="max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
        <div className="relative items-center justify-between px-2 py-5 sm:flex">
          <div>
            <img src={Logo} className="w-10 md:w-14 xl:w-20" />
          </div>
          <div>
            <ul className="hidden sm:flex">
              {navs.map((nav) => (
                <li
                  key={nav.id}
                  className="ml-6 font-medium capitalize cursor-pointer text-type-m text-primary500 hover:text-primary200 active:text-primary200 active:font-semibold"
                >
                  <NavLink to={nav.path}>{nav.link}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setNav(!nav)}
            className="absolute z-50 rounded-md cursor-pointer right-2 top-6 text-primary500 sm:hidden"
          >
            {nav ? (
              <FaTimes size={30} color="#12465E" />
            ) : (
              <FaBars size={30} color="#12465E" />
            )}
          </div>

          {nav && (
            <div className="sm:hidden">
              <ul className="flex flex-col items-start w-full gap-2 px-2 mt-5 ">
                {navs.map((nav) => (
                  <li
                    key={nav.id}
                    className="w-full py-1 font-semibold capitalize cursor-pointer text-type-l text-primary500 hover:text-primary200"
                  >
                    <NavLink onClick={() => setNav(!nav)} to={nav.path}>
                      {nav.link}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
