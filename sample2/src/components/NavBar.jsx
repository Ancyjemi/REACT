import React from "react";
import { Link } from "react-router-dom";
import { User2 } from "lucide-react";
const NavBar = () => {
  return (
    <>
      <div className="flex flex-col items-center sticky">
        <div className="flex flex-row items-center justify-start h-20 w-full gap-6 bg-purple-300">
          <div className="text-black w-[50%] p-5">Ancy Jemi Goldbell P</div>
          <div className="text-black  w-2/5 flex  flex-row item-center list-none justify-end gap-6">
            <ul className="flex flex-row gap-14">
              <Link to={"/"}>
                <li className=" hover:bg-black hover:text-white">Profile</li>
              </Link>
              <Link to={"/project"}>
                <li className=" hover:bg-black hover:text-white">Project</li>
              </Link>
              <Link to={"/contact"}>
                <li className=" hover:bg-black hover:text-white">Contact</li>
              </Link>
            </ul>
            <User2 className="h-9 w-9 text-black rounded-full border-2 border-black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
