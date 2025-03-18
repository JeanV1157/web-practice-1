"use client";

import { useState } from "react";
import Image from "next/image";
import Girasol from "../images/girasol.jpg";

export default function Home() {
  const [showSunflower, setShowSunflower] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black relative overflow-hidden">
      {!showSunflower ? (
        <div>
          <p className="text-lg text-white mt-4 font-semibold text-center py-4">
            Hoy 21 de marzo, te quiero decir esto...
          </p>
          <button
            onClick={() => setShowSunflower(true)}
            className="flex items-center justify-center bg-yellow-500 text-white px-6 py-3 rounded-full text-xl shadow-lg hover:bg-yellow-600 active:scale-95 transition-all font-semibold"
          >
            🌻 Haz click si eres Briana
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-yellow-600 mb-4 text-center">
            Estos girasoles son para tí🌻
          </h1>
          <div className="relative w-600 h-600">
            <Image src={Girasol} alt="Girasol" width={500} />
          </div>
          <p className="text-lg text-white mt-4 font-semibold text-center">
            Eres muy especial para mí, ¡eres mi princesa! ¡¡Te quiero
            muchísimo!! No dejaré que seas espectadora hoy 21 de marzo.
          </p>
          <p className="text-lg text-white mt-4 font-semibold text-center">
            Solo es un pequeño detalle del dia de hoy🌞
          </p>
        </div>
      )}
    </div>
  );
}
