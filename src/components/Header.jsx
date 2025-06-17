import React from "react";
import faceImage from "../assets/cartoon-face.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../utils/appStore";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {

      });
  };
  return (
    <div className="absolute flex justify-between items-center w-full px-4 py-2 z-10 bg-black bg-opacity-60">
      <img
        className="w-28 sm:w-48"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex items-center gap-2 sm:gap-4">
          <img className="w-8 sm:w-[45px]" src={faceImage} alt="face" />
          <button
            className="text-white text-sm sm:text-base font-bold"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
