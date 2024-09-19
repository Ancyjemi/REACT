import React from "react";
import NavBar from "../components/NavBar";
import Profilex from "../assets/img/profile.jpg";
const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center h-screen">
        <div className="flex flex-row   h-[80%] w-full bg-black ">
          <div className="flex flex-col justify-center items-center w-[70%] bg-black gap-10">
            <div className="h-[20%] w-[60%] text-2xl font-bold text-center flex justify-center items-center bg-purple-300 rounded-md">
              Hi! I am Ancy Jemi
            </div>
            <div className="h-[40%] w-[80%] rounded-md flex justify-center items-center text-center font-bold bg-purple-300">
              Young and talented engineer familiar with Java and latest
              technologies. Loooking for an intenship position in a reputed
              organization where can I learn and leverage my skills.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={Profilex}
              alt="profile"
              className="rounded-full h-60 w-60"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
