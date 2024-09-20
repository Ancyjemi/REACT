import { useEffect, useState } from "react";
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

{
  /* {visible && (
        <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
          <div className="h-[40%] w-[30%] bg-red z-50 flex flex-col bg-white">
            <div className="w-full h-[20%] flex flex-row justify-center items-center border-2">
              Delete ?
            </div>
            <div className="w-full h-[60%] flex flex-row justify-center items-center">
              Are you sure?
            </div>
            <div className="w-full h-[20%] flex flex-row justify-center items-center">
              <button
                onClick={() => setVisible(false)}
                className="bg-red-500 p-3 text-white w-1/2 h-full rounded-sm"
              >
                No
              </button>
              <button
                onClick={() => setVisible(false)}
                className="bg-green-500 p-3 text-white w-1/2 h-full rounded-sm"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="h-[80vh] w-screen flex justify-center items-center -z-10">
        <button
          onClick={() => setVisible(true)}
          className="bg-red-500 p-3 text-white w-32 rounded-sm"
        >
          Delete
        </button>
      </div> */
}

//     </>
//   );
// };

// export default Contact;
// const Contact = () => {
//   const [nulldata, setNullData] = useState(null);
//   const [numberdata, setNumberData] = useState(0);
//   const [stringdata, setStringData] = useState("a");
//   const [booleandata, setBooleanData] = useState(true);
//   const [arraydata, setArrayData] = useState([]);
//   const [objdata, setObjData] = useState({
//     name: "",
//     age: 0,
//     isalive: false,
//   });

//   if (!nulldata) {
//     setNullData("Nulldata");
//   }
//   console.log(nulldata);
//   // useEffect(() => {
//   //   console.log("Mounted")
//   // }, [data])
//   const [visible, setvisible] = useState(false);
//   return (
//     <>
//     <NavBar/>
//       <div className="h-[80vh] w-screen flex justify-center items-center -z-10">
//         <button className="bg-red-500 p-3 text-white w-32 rounded-sm">
//           {" "}
//           Delete{" "}
//         </button>
//       </div>
