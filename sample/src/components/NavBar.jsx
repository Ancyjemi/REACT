const NavBar = ({ appname }) => {
  console.log(appname);
  return (
    <>
      <div className="w-full h-[3vh] bg-purple-600 text-white  flex justify-center">
        {appname}
      </div>
    </>
  );
};
export default NavBar;
