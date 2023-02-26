import React from 'react';

export default function About() {
    return (
<section className="pb-20 bg-primary -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <a className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center hover:scale-110" href="#adopta">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-home"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Adoptá</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Adoptá felinos rescatados del abandono.
                    </p>
                  </div>
                </div>
              </a>

              <a className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center hover:scale-110" href="#transita">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-cat"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Transitá
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Ofrecé tu casa como hogar temporal.
                    </p>
                  </div>
                </div>
              </a>

              <a className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center hover:scale-110" href="#ayudanos">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-hand-holding-usd"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Colaborá
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Enviá tu colaboración económica y ayudanos.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
    );
}
