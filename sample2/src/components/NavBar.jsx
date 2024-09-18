import React from "react";
import { Link } from "react-router-dom";
import { User2 } from "lucide-react";
const NavBar = () => {
  return (
    <>
      <div className="flex flex-col items-center  h-screen w-screen overflow-y-scroll">
        <div className="flex flex-row items-center justify-start h-20 w-full gap-6 bg-black ">
          <div className="text-white w-2/5 p-5">Ancy Jemi Goldbell P</div>
          <div className="text-white  w-2/5 flex  flex-row item-center list-none justify-end gap-6">
            <ul className="flex flex-row gap-14">
              <Link to={"/"}>
                <li className=" hover:bg-white hover:text-black">Profile</li>
              </Link>
              <Link to={"/project"}>
                <li className=" hover:bg-white hover:text-black">Project</li>
              </Link>
              <Link to={"/contact"}>
                <li className=" hover:bg-white hover:text-black">Contact</li>
              </Link>
            </ul>
            <User2 className="h-9 w-9 text-white rounded-full border-2 border-white" />
          </div>
        </div>
        <div className="flex flex-row   h-full w-full bg-black ">
          <div className="flex flex-col justify-center items-center w-[60%] bg-black gap-10">
            <div className="h-[20%] w-[60%] font-bold text-center flex justify-center items-center bg-purple-300 rounded-md">
              Hi! I am Ancy Jemi
            </div>
            <div className="h-[40%] w-[80%] rounded-md bg-purple-300"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
