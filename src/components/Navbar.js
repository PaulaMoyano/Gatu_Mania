import React from "react";
import logo from "../assets/img/logo.png"

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div
            className={
              "flex items-center text-primary text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            
          >
            <img src={logo} className="h-12 mr-2 " alt="logo" />
            Gatumanía
          </div>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="https://www.facebook.com/profile.php?id=100064353235012" target={"_blank"} rel="noreferrer"
              >
                <i
                  className={
                    "text-primary fab fa-facebook text-lg leading-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="https://www.instagram.com/gatu_mania/" target={"_blank"} rel="noreferrer"
              >
                <i
                  className={
                    "text-primary fab fa-instagram text-lg leading-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2">Instagram</span>
              </a>
            </li>

            <li className="flex items-center">
              <a href="https://docs.google.com/forms/d/1kPjZij_TIHkjdYijXfdCaBxZVbS5IWdcVU-pA5KEkRM/viewform?edit_requested=true" target={"_blank"} rel="noreferrer">
              <button
                className={
                  (props.transparent
                    ? "bg-primary text-gray-800 active:bg-gray-100"
                    : "bg-pink-500 text-white active:bg-pink-600") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                ADOPTÁ
              </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
