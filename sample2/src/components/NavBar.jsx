import React from "react";
import { Link } from "react-router-dom";
import { User2 } from "lucide-react";
const NavBar = () => {
  return (
    <>
      <div className="flex flex-col items-center sticky">
        <div className="flex flex-row items-center justify-start h-20 w-full gap-6 bg-pink-950">
          <div className="text-white w-[45%] p-5">Ancy Jemi Goldbell P</div>
          <div className="text-white w-[50%] flex  flex-row item-center list-none justify-end gap-6">
            <ul className="flex flex-row gap-14">
              <Link to={"/"}>
                <li className="transition-transform duration-300 hover:scale-150">
                  Profile
                </li>
              </Link>
              <Link to={"/project"}>
                <li className=" transition-transform duration-300 hover:scale-150">
                  Project
                </li>
              </Link>
              <Link to={"/contact"}>
                <li className="transition-transform duration-300 hover:scale-150">
                  Contact
                </li>
              </Link>
            </ul>
            <User2 className="gap-10 h-9 w-9 text-white rounded-full border-2 border-white transition-transform duration-300 hover:scale-150" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
