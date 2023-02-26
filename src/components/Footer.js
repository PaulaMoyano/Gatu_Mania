import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-primary pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-primary fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              GRACIAS. Tu donación salva vidas.
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Rescatá, transitá, doná, difundí.
            </h5>
            <h5 className="text-sm mt-0 mb-2 text-gray-700">
              adopcionesgatumania@gmail.com
            </h5>
            <div className="mt-6">
              <a href="https://www.facebook.com/profile.php?id=100064353235012" target={"_blank"}>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-facebook-square"></i>
              </button>
              </a>
              <a href="https://www.instagram.com/gatu_mania/" target={"_blank"}>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-instagram"></i>
              </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Links útiles
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://docs.google.com/forms/d/1kPjZij_TIHkjdYijXfdCaBxZVbS5IWdcVU-pA5KEkRM/viewform?edit_requested=true" target={"_blank"}>Formulario de adopción
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.instagram.com/p/Cf3sLTfucgA/" target={"_blank"}>Donar sangre
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.instagram.com/p/Cd_lpX3vnnf/" target={"_blank"}>Adopción responsable
                    </a>
                  </li>

                </ul>
              </div>

            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
            
              <a
                href="https://www.instagram.com/gatu_mania/"
                className="text-gray-600 hover:text-gray-900"
              >
                Asociación Civil Gatumanía
              </a>
              <p>Buenos Aires, Argentina</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
