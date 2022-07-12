//document.write('<h1>Hola Mundo</h1>');
/*
var nombres = "Juan";
var apellido = "Perez";
var cedula = 1754065116;
var ingresos = 23678.43;
var gastos = 10000;
var declarado = true;

const periodo = 2022;

var datosCompletos = nombres + apellido;
console.log(datosCompletos);

var baeImponible = ingresos - gastos;
console.log(baeImponible);

//Datos Primitivos

var name = "Andrea";
var name = 10000;
var x = true;
var activities = ['leer','nadar','escribir'];
var persona = {
    "nombre": "luis",
    "edad": 34,
    "cuidad": "Quioto"
}

//Calculo de Impuesto a la renta
//Variables: Ingresos y Gastos
//Base imponible: I - G
//Porcenaje de Excendente: BI - Fraccion Basica
//Impuesto Renta: IFB + %Excedente

var ingresos = 25000;
var gastos = 6000;

var baseImponible = ingresos - gastos;
var impuesto = 0;
var impuestoFraccionBasica = 0;
var porcentajeExcendete = 0;
var excedente = 0;

if(baseImponible > 17854 && baseImponible <= 21442)
{
    impuestoFraccionBasica = 511;
    excedente = baseImponible - 17854;
    porcentajeExcendete = excedente * 0.12;
}

impuesto = impuestoFraccionBasica + porcentajeExcendete;
console.log('Debe cancelar de Impuesto a la Renta' + impuesto);
document.write("<h3>Su impuesto a la renta es: </h3>" + impuesto);

//Array impuesto fraccion

let impuestoFraccion = [0, 0, 154, 511, 941, 4156, 8440, 13798, 22366];
console.log(impuestoFraccionBasica)

for(let i = 0; i < impuestoFraccionBasica.length(); i++)
{
    console.log(impuestoFraccionBasica[i]);
}

//Funcion Saludo
function saludo(persona){
    console.log('Hola' + persona);
}

//Calculadora impuesto a la renta 
*/
var ingresos = prompt("Ingresos");
var gastos = prompt("Gastos");

var baseImponible = ingresos - gastos;
var impuesto = 0;
var impuestoFraccionBasica = 0;
var porcentajeExcendete = 0;
var excedente = 0;

if(baseImponible > 0 && baseImponible <= 11212)
{
    impuestoFraccionBasica = 0;
    excedente = baseImponible - 0;
    porcentajeExcendete = excedente * 0;
}else if(baseImponible > 11212 && baseImponible <= 14285)
{
    impuestoFraccionBasica = 0;
    excedente = baseImponible - 11212;
    porcentajeExcendete = excedente * 0.05;
}else if(baseImponible > 14285 && baseImponible <= 17854)
{
    impuestoFraccionBasica = 154;
    excedente = baseImponible - 14854;
    porcentajeExcendete = excedente * 0.10;
}else if(baseImponible > 17854 && baseImponible <= 21442)
{
    impuestoFraccionBasica = 511;
    excedente = baseImponible - 17854;
    porcentajeExcendete = excedente * 0.12;
}else if(baseImponible > 21442 && baseImponible <= 42874)
{
    impuestoFraccionBasica = 941;
    excedente = baseImponible - 21442;
    porcentajeExcendete = excedente * 0.15;
}else if(baseImponible > 42874 && baseImponible <= 64297)
{
    impuestoFraccionBasica = 4156;
    excedente = baseImponible - 42874;
    porcentajeExcendete = excedente * 0.20;
}else if(baseImponible > 64297 && baseImponible <= 85729)
{
    impuestoFraccionBasica = 8440;
    excedente = baseImponible - 64297;
    porcentajeExcendete = excedente * 0.25;
}else if(baseImponible > 85729 && baseImponible <= 114288)
{
    impuestoFraccionBasica = 13798;
    excedente = baseImponible - 85729;
    porcentajeExcendete = excedente * 0.30;

}else if(baseImponible > 114288){
    impuestoFraccionBasica = 22366;
    excedente = baseImponible - 114288;
    porcentajeExcendete = excedente * 0.35;
}

impuesto = impuestoFraccionBasica + porcentajeExcendete;
console.log('Debe cancelar de Impuesto a la Renta ' + impuesto);
document.write("<h3>Su impuesto a la renta es: </h3>" + impuesto);