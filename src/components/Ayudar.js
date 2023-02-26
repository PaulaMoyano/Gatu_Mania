import React from 'react';

export default function Ayudar() {
    return (
<section className="pb-20 relative block bg-gray-900" id="ayudanos">
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
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  ¡Ayudanos!
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-400">
                  ¡Podés ayudarnos de muchas formas a seguir rescatando felinos! Los aportes económicos nos ayudan a pagar las consultas veterinarias, traslados, estudios, alimentos y emergencias. También podés enviarnos donaciones de camitas, rascadores, juguetitos, medicamentos, mantitas, entre otros.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-money-check-alt"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Débito automático o transferencia
                </h6>
                <p className="mt-2 text-gray-400">
                  Alias: ONG.GATUMANIA
                </p>
                <p className="mb-4 text-gray-400">
                  Banco ICBC
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-handshake"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Mercado Pago
                </h5>
                <p className="mt-2 mb-4 text-gray-400">
                  <a href='https://www.mercadopago.com.ar/payment-link/v1/redirect?preference-id=804682745-0978404f-a490-4987-874a-20f0a3fd0e8d&source=link' target={"_blank"}> Click acá </a>
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fab fa-paypal"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  PayPal
                </h5>
                <p className="mt-2 mb-4 text-gray-400">
                    Send money: adopcionesgatumania@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
                );
            }
    