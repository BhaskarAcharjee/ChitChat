import { useState } from "react";
import "./userInfo.css";
import { useUserStore } from "../../../lib/userStore";
import { auth } from "../../../lib/firebase";

const Userinfo = () => {
  const { currentUser } = useUserStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logoutUser = () => {
    auth.signOut();
  };

  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" onClick={toggleDropdown} />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
        {dropdownOpen && (
          <div className="dropdown">
            <div className="dropdownItem" onClick={logoutUser}>
            <img src="./logout.png" alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Userinfo;
