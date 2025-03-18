"use client";

import { useState } from "react";
import Image from "next/image";
import Girasol from "../images/girasol.jpg";

export default function Home() {
  const [showSunflower, setShowSunflower] = useState(false);

  const handlePlayAudio = () => {
    const audio = document.getElementById("myAudio") as HTMLAudioElement; // Indicamos que es un elemento <audio>
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black relative overflow-hidden">
      {!showSunflower ? (
        <div>
          <p className="text-lg text-white mt-4 font-semibold text-center py-4">
            Hoy 21 de marzo, te quiero decir esto...
          </p>
          <button
            onClick={() => {
              setShowSunflower(true);
              handlePlayAudio();
            }}
            className="flex items-center justify-center bg-yellow-500 text-white px-6 py-3 rounded-full text-xl shadow-lg hover:bg-yellow-600 active:scale-95 transition-all font-semibold"
          >
            🌻 Haz click si eres Briana
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-yellow-600 mb-4 p-3 text-center">
            Estos girasoles son para ti🌻
          </h1>
          <div className="relative w-600 h-600">
            <Image src={Girasol} alt="Girasol" width={500} />
          </div>
          <p className="text-lg text-white mt-4 p-5 font-semibold text-center">
            Briana, eres el sol que ilumina mis días y la razón detrás de cada
            uno de mis sonrisas. No hay palabras suficientes para expresar
            cuánto significas para mí. Hoy, 21 de marzo, no quiero que solo
            observes el mundo; quiero que seas el centro de él, mi reina, mi
            princesa, mi todo. Te quiero más de lo que las estrellas quieren al
            cielo, más de lo que las flores aman al sol. Esto, con todo mi
            corazón, es para ti, porque cada latido mío te pertenece. 🌻❤️
          </p>
        </div>
      )}

      {/* Control de audio */}
      <audio id="myAudio" loop>
        <source src="/audio/JM-suspira.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
