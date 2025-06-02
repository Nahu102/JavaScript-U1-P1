//muestra en pantalla una ventana para ingresar el nombre
let nombre = prompt('ingrese su nombre:');
//hace lo mismo que el anterior, el parsefloat transforma el dato ingresado de un string a un float
let num1 = parseFloat(prompt('ingrese un numero:'));
let num2 = parseFloat(prompt('ingrese otro numero:'));
//calculos
let suma = num1 + num2;
let resta = num1 - num2;
let div = num1 / num2;
let mult = num1 * num2;
//mostrar en pantalla los datos
document.write(`<div class=resultado>`)
document.write(`<h1>Resultados</h1>`)
document.write(`<p> Bienvenido a mi primera pagina con javascrip ${nombre}</p>`)
document.write(`<p> Suma: ${num1} + ${num2} = ${suma}</p>`)
document.write(`<p> Resta: ${num1} - ${num2} = ${resta}</p>`)
document.write(`<p> Division: ${num1} / ${num2} = ${div}</p>`)
document.write(`<p> Multiplicacion: ${num1} * ${num2} = ${mult}</p>`)
document.write(`</div>`)