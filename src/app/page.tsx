"use client";

import { useState } from "react";
import Image from "next/image";
import Corazon from "../images/SAN VALENTIN.png";
import Rosa from "../images/rosas.png";

export default function Home() {
  const [showCard, setShowCard] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white relative overflow-hidden">
      {!showCard ? (
        <button
          onClick={() => setShowCard(true)}
          className="flex items-center justify-center bg-red-500 text-white px-6 py-3 rounded-full text-xl shadow-lg hover:bg-red-600 active:scale-95 transition-all"
        >
          ❤️ Para ti Briana!
        </button>
      ) : !showMessage ? (
        <div className="p-6 bg-gray-100 shadow-lg rounded-2xl max-w-md text-center">
          <Image
            src={Corazon}
            alt="Tu imagen"
            width={300}
            height={200}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            BRIANA ❤️, ¿QUIERES SER MI SAN VALENTIN? Mis ojos, mis abrazos y mis
            labios solo te quieren a ti ese dia! ACEPTAS?❤️
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setShowMessage(true)}
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 active:scale-95 transition-all"
            >
              SÍ
            </button>
            <button
              onClick={() =>
                alert("Respuesta incorrecta! Tienes que aceptar 😢")
              }
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 active:scale-95 transition-all"
            >
              NO
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-pink-500 mb-4 text-center">
            Nos vemos el 14 de febrero preciosa ❤️
          </p>
          <div className="p-6 bg-gray-100 shadow-lg rounded-2xl max-w-md text-center">
            <Image
              src={Rosa}
              alt="Tu imagen"
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {Array.from({ length: 50 }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-8 bg-pink-400 opacity-75 absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  animation: `fall ${Math.random() * 2 + 3}s linear infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
