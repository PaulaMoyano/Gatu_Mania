import React from 'react';
import Step from './Step';
import paso1 from '../assets/img/paso1.jpg';
import paso2 from '../assets/img/paso2.jpg';
import paso3 from '../assets/img/paso3.jpg';
import paso4 from '../assets/img/paso4.jpg';


export default function Adopta() {
    return (

<section className="pt-20 pb-48" id="adopta">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Adoptá un gato
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  Al momento de adoptar asumís un acto de amor, y de responsabilidad y compromiso de por vida. Si estás seguro de que querés adoptar, seguí los siguientes pasos:
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
                <Step number="1" img={paso1} title="Encontrá a tu felino."/>
                <Step number="2" img={paso2} title="Envianos el formulario de adopción completo." />
                <Step number="3" img={paso3} title="Nos pondremos en contacto con vos."/>
                <Step number="4" img={paso4} title="¡Proceso de adopción finalizado!" />
            </div>
          </div>
        </section>
           );
        }
