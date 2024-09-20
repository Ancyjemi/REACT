import React from "react";
import NavBar from "../components/NavBar";
const Project = () => {
  const projects = [
    {
      name: "Bakery Order And Billing App",
      description:
        " The innovative bakery management app streamlines the entire order-to-servive process, enhancing the efficient of bakery operations and improving the overall customer experience.",
    },
    {
      name: "Project Two",
      description: "This is the description for project two.",
    },
    {
      name: "Project Three",
      description: "This is the description for project three.",
    },
  ];
  return (
    <>
      {" "}
      <NavBar />
      {/* <div className="bg-black flex flex-col item-centre h-screen ">
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
      </div> */}
      <div className="flex justify-center text-center items-center min-h-screen ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10 mt-0 ">
          <div className="bg-pink-950 border-neutral-800 text-white  shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-90">
            <h2 className="text-xl font-semibold">
              Bakery Ordering And Billing App
            </h2>
            <p className="mt-4">
              The innovative bakery management app streamlines the entire
              order-to-servive process, enhancing the efficient of bakery
              operations and improving the overall customer experience.
            </p>
          </div>

          <div className="border-neutral-800 bg-pink-950 text-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-90">
            <h2 className="text-xl font-semibold">Air Canvas</h2>
            <p className="mt-4">
              An Air Canvas is an innovative tool that allows users to draw and
              create artwork in mid-air without the need for traditional
              surfaces like paper or a physical canvas. By using motion sensors,
              cameras, or other tracking technology, users can move their hands
              or a stylus through the air to create digital art that is captured
              and displayed in real-time on a screen or in a virtual space.
            </p>
          </div>

          <div className="border-neutral-800 bg-pink-950  text-white  shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-90">
            <h2 className="text-xl font-semibold">Tourist Website</h2>
            <p className="mt-4">
              Develop an interactive tourism website showcasing local
              attractions, accommodations, and travel tips to enhance visitor
              experiences. Include booking features and user-generated content
              for a personalized touch.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
