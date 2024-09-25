import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
const Contact = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <NavBar />
      <div className="flex justify-center text-center items-center min-h-screen ">
        <div className="bg-pink-950 border-neutral-800 text-white  shadow-md rounded-lg p-6 transition-transform duration-300 hover:scale-90">
          <h2 className="text-xl font-semibold">ANCY JEMI</h2>
          <p>ancyjemii@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
