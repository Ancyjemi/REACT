import React from "react";
import NavBar from "../components/NavBar";
const Project = () => {
  return (
    <>
      <NavBar />
      <div className="bg-black flex flex-col item-centre h-screen ">
        <div className="flex flex-row w-[100%] h-[80%] justify-center items-center bg-black gap-40">
          <div className="w-[20%] h-[60%] flex flex-col justify-center items-center bg-white gap-6 p-7">
            <div className="bg-purple-300 rounded-md text-center">
              BAKERY ORDERING AND BILLING APP
            </div>
            <div className="bg-purple-300 rounded-md text-center">
              The innovative bakery management app streamlines the entire
              order-to-servive process, enhancing the efficient of bakery
              operations and improving the overall customer experience.
            </div>
          </div>
          <div className="w-[20%] h-[60%] flex flex-col justify-center items-center bg-white gap-6 p-7">
            <div className="bg-purple-300 rounded-md text-center">
              BAKERY ORDERING AND BILLING APP
            </div>
            <div className="bg-purple-300 rounded-md text-center">
              The innovative bakery management app streamlines the entire
              order-to-servive process, enhancing the efficient of bakery
              operations and improving the overall customer experience.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
