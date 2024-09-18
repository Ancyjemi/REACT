const NavBar = ({ dataa }) => {
  for (let i = 0; i < dataa.length; i++) {
    console.log(dataa);
  }
  // console.log(appname);
  return (
    <>
      <div className="w-full h-[3vh] bg-purple-600 text-white  flex justify-center">
        <ul>
          {dataa.map((item, index) => (
            <li key={index}>
              {item.name} - {item.dept}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default NavBar;
