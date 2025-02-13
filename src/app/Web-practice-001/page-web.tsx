// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "../utils";
// export default function Home() {
//   /**
//    * Lista de requerimientos dia 1-2 LISTO
//    * Pantalla blanca LISTO
//    * Crear los contenedores principales (hacer un ppt) LISTO
//    * Crear la barra superior (Home, profile, contact) LISTO
//    * Ingresar el h1 A brand and product designer working with clients globally LISTO
//    * Barra inferior del texto LISTO
//    * Agregar las imagenes : Crear una biblioteca de imagenes que aparareceran
//    *
//    */
//   const pathname = usePathname();

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/profile", label: "Profile" },
//     { href: "/contact", label: "Contact" },
//   ];
//   return (
//     /** contenedor padre principal */
//     <div className="min-h-screen bg-white">
//       <div className="flex w-full justify-center py-4 bg-white">
//         <div className="flex gap-1 px-2 py-1 bg-gray-100 rounded-full">
//           {/** Contenedor hijo 1
//            */}
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={cn(
//                 "px-6 py-2 text-sm font-medium transition-colors rounded-full",
//                 pathname === link.href
//                   ? "bg-white text-black shadow-sm"
//                   : "text-gray-600 hover:text-gray-900"
//               )}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col items-center h-auto bg-white py-10">
//         {/** Contenedor hijo 2 centra
//          */}
//         <h1 className="text-black text-center text-[4rem] mb-6 leading-[1.15] font-medium max-w-2xl mx-auto ">
//           A brand and product designer working with clients globally
//         </h1>
//         <div className="flex justify-center w-full py-3 ">
//           <div className="flex justify-center items-center gap-5 text-sm transition-colors">
//             <span className="text-gray-600 hover:text-gray-900">
//               Expertise{" "}
//             </span>
//             <span className="rounded-full place-content-center px-4 h-8 bg-gray-200 text-gray-600 hover:text-gray-900">
//               {" "}
//               Branding{" "}
//             </span>
//             <span className="rounded-full place-content-center px-4 h-8 bg-gray-200 text-gray-600 hover:text-gray-900">
//               {" "}
//               Product{" "}
//             </span>
//             <span className="rounded-full place-content-center px-4 h-8 bg-gray-200 text-gray-600 hover:text-gray-900">
//               Design Systems{" "}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
