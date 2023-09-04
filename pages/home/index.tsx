import { useContext } from "react";
import { AppContext } from "../../contexts/store";
import Cookies from "js-cookie";

const HomePage = () => {
  const d = useContext(AppContext);
  // const cookies = new Cookies(req, res)
  return (
    <div className="">
      <div
        // onClick={() =>
        //   // setUser({
        //   //   user,
        //   // })
        // }
        className=" text-8xl text-fuchsia-950"
      >
        1
      </div>
      {/* {"user =" + user} */}
    </div>
  );
};

export default HomePage;
