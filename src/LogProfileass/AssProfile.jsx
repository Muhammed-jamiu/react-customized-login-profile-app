import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa6";

function AssProfile() {
  const [isShowed, setIsShowed] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    //Check your Local Storage //here are the code to
    const loginDetail = localStorage.getItem("loginDetail");
    if (!loginDetail || loginDetail !== "anatemuhammed@gmail.com") {
      navigate("/login");
    }
  }, []);
  const logOut = () => {
    const deleteData = localStorage.removeItem("loginDetail");
    if (!deleteData) {
      navigate("/login");
    }
  };
  return (
    <>
      <div className="container">
        <button
          onClick={() => {
            setIsShowed(() => !isShowed);
          }}
          className="details-btn  md:hidden"
        >
          {isShowed ? (
            <FaHome className=" sm:text-white  sm:hover:text-gray-100 hover:shadow-md hover:shadow-black" />
          ) : (
            <FaBars className="hover:text-sky-400 hover:shadow-md hover:shadow-black sm:hover:text-gray-100 text-white " />
          )}
        </button>
        <nav
          className={`profile-container ${
            isShowed ? "profile-container" : "profile-details"
          }`}
        >
          <div
            className={
              "profile-details absolute border-2 w-[350px] bg-white p-3 rounded-md top-[80px] right-[10px] md:hidden  flex-wrap "
            }
          >
            <ul>
              <li>
                Name: <span className="ml-[25px]">MUHAMMED-JAMIU</span>
              </li>
              <li>
                Gender: <span className="ml-[15px]">MALE</span>
              </li>
              <li>
                Age: <span className="ml-[38px]">28</span>
              </li>
              <li>
                Country: <span className="ml-[12px]">NIGERIA</span>
              </li>
              <li>
                State: <span className="ml-[35px]">KOGI STATE</span>
              </li>
              <li>
                Tel:{" "}
                <span className="ml-[45px]">+2347013862792,+2349163376259</span>
              </li>
              <li>
                Email:{" "}
                <span className="text-blue-600 hover:underline cursor-pointer ml-[30px]">
                  anatemuhammed@gmail.com
                </span>
              </li>
              <li>
                Github:{" "}
                <span className="text-green-600 hover:underline cursor-pointer ml-[22px]">
                  github.com/muhammed-jamiu
                </span>
              </li>
              <li>
                Occup: <span className="ml-[25px]">FRONT-END DEVELOPER</span>
              </li>
              <li>
                School: <span className="ml-[23px]">FUT,MINNA,NIGERIA</span>
              </li>
            </ul>
            <div className="flex m-3 justify-end gap-[13px]  p-[2px]rounded-md">
              <span className="relative right-[40px]">Contant-Me @</span>
              <FaFacebook className=" social-icon text-blue-700 bg-white rounded-3xl hover:scale-125 " />
              <FaWhatsapp className="social-icon text-green-600" />
              <FaInstagram className="social-icon text-red-700 bg-white rounded-full" />
              <FaTiktok className="social-icon text-red-600" />
              <FaLinkedinIn className="social-icon bg-white rounded-sm" />
            </div>
          </div>
        </nav>
        <div>
          <h3 className="text-center mb-4 border-4 rounded-lg bg-sky-700 uppercase tracking-wide text-white  md:block md:bg-white md:text-sky-600 md:border-blue">
            My Profile
          </h3>
          <img
            src="/picture.jpg"
            className="h-[400px] w-[400px] rounded-3xl"
            alt=""
          />
        </div>
        <div className="flex gap-3 border-4  justify-center rounded-lg bg-sky-700 text-white uppercase tracking-wide w-[400px] md:bg-white md:text-sky-600">
          <p>Abdulsalam </p>
          <p>Muhammed-Jamiu</p>
        </div>
        <button
          onClick={logOut}
          className=" font-semibold tracking-wide border-4 bg-red-800 rounded-lg uppercase text-white hover:bg-red-700 w-[400px] md:bg-white md:text-red-600"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default AssProfile;
