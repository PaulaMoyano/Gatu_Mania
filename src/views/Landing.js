import React from "react";

import Navbar from "components/Navbar.js";
import Footer from "components/Footer.js";
import About from "components/About.js";
import Description from "components/Description.js";
import Adopta from "components/Adopta.js";
import Ayudar from "components/Ayudar.js";
import Form from "components/Form.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main className="scroll-smooth">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('cats.jpg')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-primary font-semibold text-6xl">
                      Asociación Civil Gatumanía
                    </h1>
                    <p className="mt-4 text-4xl text-gray-300">
                      Rescate de felinos
                    </p>
                    <p className="mt-4 text-xl text-gray-300">
                      ONG
                    </p>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
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
        </div>
      
      <div><About /></div>

      <div><Description /></div>
    
      <div><Adopta /></div>
        
      <div><Ayudar /></div>
    
      <div><Form /></div>

      </main>
      <Footer />
    </>
  );
}
