import React from "react";

const Step = ( {title, img, number} ) => {
    return (
        <div className="w-full flex-1 h-[35rem] relative inline-block overflow-hidden rounded-xl drop-shadow-2xl text-primary font-semibold">
            <img className="absolute block top-1/2 left-1/2 min-h-full min-w-full object-cover" alt={title} style={{ transform: "translate(-50%, -50%)"}} src={img} />
            <p className="absolute bottom-44 left-12 text-5xl drop-shadow-md">{number}</p>
            <p className="absolute bottom-16 left-12 text-2xl drop-shadow-md">{title}</p>
        </div>
    );
    }

export default Step