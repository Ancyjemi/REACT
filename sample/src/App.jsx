import NavBar from "./components/NavBar";

const App = () => {
  const Appname = "HOME";
  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center ">
        <NavBar appname={Appname} />
      </div>
      {/* <div className="h-screen w-screen flex justify-center items-center bg-purple-600">
        <div className="h-4/6 w-30 flex justify-center items-center bg-white rounded-md shadow-xl">
          <form className="h-80 w-80 flex flex-col justify-center items-center gap-5">
            <h1 className="text-purple-500 font-bold text-xl">Register Form</h1>
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className=" p-4 bg-[#f8f8f8] font-bold outline-none active:outline-none border-b-2 hover:border-purple-500"
            />

            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className=" p-4 bg-[#f8f8f8] font-bold outline-none active:outline-none border-b-2 hover:border-purple-500"
            />

            <input
              type="tel"
              name=""
              id=""
              placeholder="Number"
              className=" p-4 bg-[#f8f8f8] font-bold outline-none active:outline-none border-b-2 hover:border-purple-500"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="p-3 bg-[#f8f8f8] font-bold outline-none active:outline-none border-b-2 hover:border-purple-500"
            />
            <button
              type="Submit"
              className="w-5/6 rounded-md bg-purple-500  text-white p-3 hover:bg"
            >
              Register
            </button>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default App;
