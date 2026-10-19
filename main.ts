console.log("hola funval")

//TIPO DE DATOS--------------------------------------
let edad: number = 32;
let apPaterno: string = 'Rodriguez';
let fecha: string = "2026-07-24"
let salva: boolean = true;
let resultado: null = null;
let noDefinido: undefined; 
let numeroGigante : bigint = 123456789536956459812655n; 
let idUnico: symbol = Symbol ('id');
//EXCLUSIVOS DE TYPESCRIPT
let comodin: any = 'texto plano';
comodin = 32;
comodin = true;

let dato: unknown = "mensaje"
let vacio: void;

//aprender a crear variables y constantes en TS

// VARIABLES

//Variables se pueden reasignar pero no cambiar el tipo de dato
let telefono = 'samsung'; 
telefono = 'xiaomi';
let superHeroe = 'spiderman'
superHeroe = 'batman'


//Constante

//Una constante no se puede reasignar
const pi = 3.1416;
 

//ADVERTENCIA!!!!!!
var prohibido = "NO USAR" 

///---------------------simbolos de operacion---------
//+ Adicon o concatenación
let nombrecompleto = "Kevin" + " " + "Rodriguez";
console.log(nombrecompleto);
let a = 2;
let b = 4;
let superResultado = a + b;
// - sustraccion

// * multiplicacion

//  / Division 

// ** potencia

// SIMBOLOS DE COMPARACIÓN 

/*---------------------------------------------------*/
let estudiante = "Esdras Blanco";
let nota1 = 90;
let nota2 = 75 
let nota3 = 5

let promedio = (nota1 + nota2 + nota3 ) / 3;
console.log (
    "el estudiante" + estudiante + "tiene un promedio de: " + promedio,  
);

//
const horaParqueo: number = 20;
let tiempoParqueado: number = 5;
let total: number = horaParqueo * tiempoParqueado;

console.log("El total a pagar es de " + total);

//------------------------------------------//

let nombreusuario: string = "alexcode"
let seguidores: number = 250
let cuentaVerificada: boolean = true
console.log("El usuario" + nombreusuario + "tiene un total de" + seguidores + "y su cuenta está verificada" + cuentaVerificada)

//------------------------------------------//
let montocuenta: number = 80
let porcentajepropina: number = 0.15
let montopropina: number = (montocuenta * porcentajepropina)
let totalpagar: number = (montocuenta + montopropina)
console.log("El total a pagar es" + " " + totalpagar)

//------------------------------------------//

let visitasweb: number = 10 
visitasweb++;
visitasweb--;
console.log ("El total de las visitas web es de" + visitasweb)

//----------------------------------------------//

let stockProductos: number = 50
let nuevopedido: number = 20
let ventarealizada: number = 8
let stockrestante: number = (stockProductos + nuevopedido) - ventarealizada
let stocktriple: number = (stockrestante * 3)
console.log ("El nuevo total del stock es" + " " + stocktriple)