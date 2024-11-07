
/*metodo mas usado*/
document.getElementById("demo").innerHTML = "hola JavaScript";
document.getElementById("demo").style.fontSize = "40px";

/*salida de datos*/
window.alert(5+2);
console.log(6+2);
/*Declaracion*/
let a,b,c;
a = 5;
b = 6;
c = a + b;
window,alert(c);
document.getElementById("demo").innerHTML = c;

/*variables*/
let p,q,r;
p = 7;
q = 5;
const m = 8;
r = p + q + m;
document.getElementById("demo1").innerHTML = r;

/*tipo de datos*/
let num = 24; //numero entero
let name ="Pepito calderon"; //cadena
let km = 14.5; //Numero decimal
let iscolombiano = true;//Booleano
let obj = {firstName:"Ana",lastName:"perez"};// objeto

let y = 17 + "POO";
let unir = "17" + "POO";
window.alert(y);
window.alert(unir);

/*definicion de una funcion*/
function myFunction(){
    document.getElementById("demo2").innerHTML = "New paragraph";
}
