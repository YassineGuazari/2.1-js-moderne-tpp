 const person = {
 name: "Sara",
 sayHello: function () {
   console.log("Bonjour " + this.name);
 },
 sayHelloArrow: () => {
   console.log("Bonjour " + this.name);
 },
};
 
person.sayHello();
person.sayHelloArrow();

mathUtils.js :
// mathUtils.js
export const PI = 3.14;
 
export function carre(x) {
 return x * x;
}
 
// Export par défaut
export default function message() {
 console.log("📘 Module mathUtils chargé !");
}

index.js :
     // index.js
import message, { PI, carre } from "./mathUtils.js";
 
message(); // 📘 Module mathUtils chargé !
console.log("PI =", PI);
console.log("Carré de 5 =", carre(5));


