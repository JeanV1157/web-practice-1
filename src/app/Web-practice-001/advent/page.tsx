// // "use client";

// // import { stringify } from "querystring";
// // import { useState } from "react";

// export default function Home() {
//   // // Problem 1
//   // const multiplesThreeFive = [];
//   // for (let i = 1; i < 1000; i++) {
//   //   if (i % 3 === 0 || i % 5 === 0) {
//   //     multiplesThreeFive.push(i);
//   //   }
//   // }

//   // const addMultiplesThreeFive = multiplesThreeFive.reduce(
//   //   (acc, val) => acc + val,
//   //   0
//   // );
//   // console.log("Suma de multiplos 3 al cinco", addMultiplesThreeFive);

//   // const addMultiples3And5 = (limit: number) => {
//   //   let sum = 0;
//   //   for (let i = 1; i < limit; i++) {
//   //     if (i % 3 === 0 || i % 5 === 0) {
//   //       sum = sum + i;
//   //     }
//   //   }
//   //   return sum;
//   // };
//   // const result = addMultiples3And5(1000);
//   // console.log(
//   //   "El resultado de la suma de los multiplos de 3 o 5 menores de 1000 es:",
//   //   result
//   // );
//   // //////////////////////////////////////////////////////////////////////////////////////////////////////////
//   // //Problem 2

//   // const addFibonacciLimit = (limit: number) => {
//   //   let a = 1;
//   //   let b = 2;
//   //   let sum = 0;

//   //   while (b <= limit) {
//   //     if (b % 2 === 0) {
//   //       sum = sum + b;
//   //     }
//   //     const nexTerm = a + b;
//   //     a = b;
//   //     b = nexTerm;
//   //   }
//   //   return sum;
//   // };

//   // const resultt = addFibonacciLimit(4000000);

//   // console.log({ resultt });

//   // function prepareGifts(gifts: number[]) {
//   //   const uniqueGift = [...new Set(gifts)];
//   //   const sortGift = uniqueGift.sort((a, b) => a - b);

//   //   return sortGift;
//   // }

//   // const Gift = prepareGifts([5, 3, 4, 5, 1, 11, 3, 4, 5, 2, 6, 7, 4323]);
//   // console.log({ Gift });

//   // function createFrame(names: string[]) {
//   //   const maxLength = Math.max(...names.map((name) => name.length));
//   //   const frameWidth = maxLength + 4;

//   //   const topBotton = "*".repeat(frameWidth);
//   //   const frameNames = names
//   //     .map((name) => `* ${name.padEnd(maxLength, " ")} *`)
//   //     .join("\n");

//   //   return `${topBotton}\n${frameNames}\n${topBotton}`;
//   // }

//   // const nombres = ["Ana", "Luis", "María"];
//   // const nombresConMarco = createFrame(nombres);

//   // console.log("Nombres con marco:\n", nombresConMarco);

//   //   <p>La suma de los cuadrados de los diez primeros números naturales es,</p>
//   // $$1^2 + 2^2 + ... + 10^2 = 385.$$
//   // <p>El cuadrado de la suma de los diez primeros números naturales es,</p>
//   // $$(1 + 2 + ... + 10)^2 = 55^2 = 3025.$$
//   // <p>Por lo tanto, la diferencia entre la suma de los cuadrados de los diez primeros números naturales y el cuadrado de la suma es $3025 - 385 = 2640$.</p>
//   // <p>Encuentra la diferencia entre la suma de los cuadrados de los primeros cien números naturales y el cuadrado de la suma.</p>

//   //Hallar
//   // suma de cuadrados 1**2 + 2**2 +...+100**2 =total 1
//   // cuadrado de la suma : 1+2....+100 = (total 2)**2= total 3
//   // total 1 -total 3 = x
//   // let addSquared = 0;
//   // for (let i = 1; i <= 100; i++) {
//   //   const elevation = i ** 2;
//   //   addSquared += elevation;
//   // }
//   // console.log("El resultado de la suma de cuadrados es:", addSquared);
//   // let addTotal = 0;
//   // for (let i = 1; i <= 100; i++) {
//   //   addTotal += i;
//   // }
//   // const elevation = addTotal ** 2;
//   // console.log("El resultado de cuadrado de la suma es:", elevation);

//   // const difference = elevation - addSquared;
//   // console.log({ difference });

//   //////////////////////PROBLEM 03 - ADVENT//////////////////////////////////////////////////////////////
//   // Papá Noel, está revisando el inventario de su taller para preparar la entrega de
//   // regalos. Los elfos han registrado los juguetes en una matriz de objetos,
//   // pero la información está un poco desorganizada. Debes ayudar a Papá Noel a organizar
//   // el inventario.

//   // Recibirás una matriz de objetos, donde cada objeto representa un juguete y tiene
//   // las propiedades:

//   // nombre: el nombre del juguete (cadena).
//   // cantidad: la cantidad disponible de ese juguete (entero).
//   // categoría: la categoría a la que pertenece el juguete (cadena).
//   // Escribe una función que procese esta matriz y devuelva un objeto que organice los
//   // juguetes de la siguiente manera:

//   // Las claves del objeto serán las categorías de los juguetes.
//   // Los valores serán objetos que tengan los nombres de los juguetes como claves y las
//   // cantidades totales de cada juguete en esa categoría como valores.
//   // Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
//   // Si la matriz está vacía, la función debe devolver un objeto vacío {}.

//   /**REQUERIMIENTOS
//    * 1.Hacer una matriz de objetos
//    * 2.ingresar informacion de una variable de objetos a la matriz creada
//    * 3.crear una condicion que cuando no exista una categoria devuelva un objeto vacio
//    * 4.crear una condicion que sume las cantidades de las mismas categorias con los mismos nombres
//    *sino solo devuelve la cantidad
//    */

//   /**
//    * @param {{ name: string, quantity: number, category: string }[]} inventory
//    * @returns {object} The organized inventory
//    */
//   // const inventory = [
//   //   { name: "doll", quantity: 5, category: "jean" },
//   //   { name: "car", quantity: 3, category: "jean" },
//   //   { name: "ball", quantity: 2, category: "jean" },
//   //   { name: "car", quantity: 2, category: "toys" },
//   //   { name: "racket", quantity: 4, category: "sports" },
//   // ];

//   // type Props = {
//   //   name: string;
//   //   quantity: number;
//   //   category: string;
//   // }[];

//   // type OrganizedInventory = {
//   //   [name: string]: {
//   //     [category: string]: number;
//   //   };
//   // };

//   // const organizeInventory = (inventory: Props) => {
//   //   const objects: OrganizedInventory = {};
//   //   for (const { name, category, quantity } of inventory) {
//   //     if (!objects[category]) {
//   //       objects[category] = {};
//   //     }
//   //     if (objects[category][name]) {
//   //       objects[category][name] += quantity;
//   //     } else {
//   //       objects[category][name] = quantity;
//   //     }
//   //   }
//   //   return objects;
//   // };
//   // console.log(organizeInventory(inventory));
//   //

//   /////////////////PROBLEM 1/////////////////////////////////////////////////////////////

//   // Papá Noel 🎅 ha recibido una lista de números mágicos que representan regalos 🎁
//   // , pero algunos de ellos están duplicados y deben eliminarse para evitar confusiones.
//   // Además, los regalos deben ordenarse en orden ascendente antes de ser entregados a los
//   // elfos.

//   // Tu tarea es escribir una función que reciba una lista de números enteros
//   // (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados,
//   // ordenada en orden ascendente.

//   /*
//   REQUERIMIENTOS
//   1. Hacer un array que reciba numeros enteros
//   2.devolver una lista sin duplicados y en orden ascendente

// **/
//   // const gifts = [1, 3, 4, 4, 6, 6, 1];

//   // function prepareGifts(gifts) {
//   //   const giftsNum = [...new Set(gifts)];
//   //   const order = giftsNum.sort((a, b) => a - b);

//   //   return order;
//   // }

//   // console.log(prepareGifts(gifts));

//   //   Los elfos de Papá Noel 🧝🧝‍♂️ han encontrado un montón de botas mágicas iguales
//   // en el taller. Cada bota se describe con dos valores:

//   // type indica si es una bota izquierda (I) o una bota derecha (R).
//   // size indica el tamaño de la bota.
//   // Tu tarea es ayudar a los elfos a emparejar todas las botas del
//   // mismo tamaño, teniendo una izquierda y una derecha. Para ello,
//   // debes devolver una lista de las botas disponibles después de emparejarlas.

//   // Nota: ¡Puedes tener más de un par de botas del mismo tamaño!

//   /*
// REQUERIMIENTOS
// 1. Cada bota tiene 2 valores: type y size
// 2.type: string, size number
// 3. condicion empaca las botas del mismo tamaño solo cuanto tiene izquierda y una derecha
// **/

//   // /**
//   //  * @param {{ type: 'I' | 'R', size: number }[]} shoes
//   //  * @returns {number[]} Available shoes
//   //  */
//   // const shoes = [
//   //   { type: "I", size: 39 },
//   //   { type: "R", size: 39 },
//   //   { type: "I", size: 39 },
//   //   { type: "R", size: 39 },
//   //   { type: "I", size: 38 },
//   //   { type: "I", size: 38 },
//   //   { type: "I", size: 38 },
//   //   { type: "R", size: 38 },
//   //   { type: "R", size: 38 },
//   // ];
//   // type Shoe = {
//   //   type: "I" | "R";
//   //   size: number;
//   // };

//   // function organizeShoes(shoes: Shoe[]): Shoe {
//   //   const sizeCount: Record<number, { I: number; R: number }> = {};

//   //   Contar botas por tipo y tamaño
//   //   for (const { type, size } of shoes) {
//   //     if (!sizeCount[size]) {
//   //       sizeCount[size] = { I: 0, R: 0 };
//   //     }
//   //     sizeCount[size][type]++;
//   //   }

//   //   Generar los pares
//   //   const pairs = [];
//   //   for (const size in sizeCount) {
//   //     const { I, R } = sizeCount[size];
//   //     const pairCount = Math.min(I, R); // Número de pares posibles
//   //     console.log({ pairCount });
//   //     for (let i = 0; i < pairCount; i++) {
//   //       pairs.push(Number(size));
//   //       console.log({ pairs });
//   //     }
//   //   }

//   //   return pairs;
//   // }

//   // console.log(organizeShoes(shoes));

//   ////////////////////////PROBLEMA 11///////////////////////////////////////////

//   // El Grinch ha hackeado los sistemas del taller de Papá Noel y ha codificado los
//   // nombres de todos los archivos importantes. Ahora los elfos no pueden encontrar
//   // los archivos originales y necesitan tu ayuda para descifrar los nombres.

//   // Cada archivo sigue este formato:

//   // Comienza con un número (puede contener cualquier número de dígitos).
//   // Luego tiene un guión bajo _.
//   // Continúa con un nombre de archivo y su extensión.
//   // Termina con una extensión extra al final (que no necesitamos).
//   // Ten en cuenta que los nombres de los archivos pueden contener letras (a-z, A-Z),
//   // números (0-9), otros guiones bajos (_) y guiones (-).

//   // Tu tarea es implementar una función que reciba una cadena con el nombre de un
//   // archivo codificado y devuelva solo la parte importante: el nombre del archivo y su extensión.

//   /**
//    Requerimientos:
//    1. Hacer que mi frase no reciba numeros al inicio
//    1.1. Creamos una variable que ignore los numeros al inicio
//    2. No leer el primer guion bajo
//    3. Leer el nombre y su extencion
//    */
//   type Props = {
//     text: string;
//   };
//   const nameCode = (text: Props) => {
//     let found = 0; // Conteo de guiones bajos
//     let dotCount = 0; // Conteo de puntos
//     let result = ""; // Acumulador para el resultado

//     for (const char of text) {
//       if (char === "_") {
//         found++; // Incrementamos el conteo de guiones bajos
//         if (found === 2) {
//           result += "_"; // Conservamos solo el segundo guion bajo
//         }
//         continue; // Continuamos al siguiente carácter
//       }

//       if (char === ".") {
//         dotCount++; // Incrementamos el conteo de puntos
//         if (dotCount === 2) break; // Detenemos la iteración al alcanzar el segundo punto
//         result += "."; // Conservamos el primer punto
//         continue;
//       }

//       if (/[a-zA-Z-]/.test(char)) {
//         result += char; // Agregamos las letras al resultado
//       }
//     }

//     return result;
//   };

//   const input = "12343423_Hola-mundo.png.jkjkslkjals";
//   const result = nameCode(input);
//   console.log({ result });
//   return;
// }
