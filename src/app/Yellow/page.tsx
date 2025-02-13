// "use client";

// import { useEffect, useRef } from "react";

// export default function MovingStars() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null); // Definir el tipo de ref

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     if (!canvas) return; // Verificar si el canvas es null

//     const ctx = canvas.getContext("2d");

//     if (!ctx) return; // Verificar si el contexto es null

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const stars = Array.from({ length: 200 }).map(() => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       radius: Math.random() * 2,
//       speed: Math.random() * 0.5 + 0.2,
//     }));

//     function drawStars() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.fillStyle = "white";

//       stars.forEach((star) => {
//         ctx.beginPath();
//         ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.closePath();

//         star.y += star.speed;
//         if (star.y > canvas.height) {
//           star.y = 0;
//           star.x = Math.random() * canvas.width;
//         }
//       });

//       // Dibujar texto amarillo brillante
//       ctx.font = "30px Arial";
//       const gradient = ctx.createLinearGradient(
//         0,
//         canvas.height / 2,
//         canvas.width,
//         canvas.height / 2
//       );
//       gradient.addColorStop(0, "#FFFF00");
//       gradient.addColorStop(1, "#FFD700");
//       ctx.fillStyle = gradient;
//       ctx.textAlign = "center";
//       ctx.fillText(
//         "Nidia ! Mira las estrellas, mira cómo brillan para ti..<3",
//         canvas.width / 2,
//         canvas.height / 2
//       );
//     }

//     function animate() {
//       drawStars();
//       requestAnimationFrame(animate);
//     }

//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="h-screen w-screen bg-black">
//       <canvas ref={canvasRef} className="absolute top-0 left-0"></canvas>
//     </div>
//   );
// }
