document.write("<h1>ARRAYS</h1>")
//Acceder a un elemento en array

document.write("<h3>ELEMENTOS DE UN ARRAY</h3>")
const numbers = [1, 2, 3, 4, 5]

document.write("El arreglo en su primera posicion es: "+numbers[0]+"<br>")

document.write("El arreglo en la posicion dos es: "+numbers[2]+"<br>")

//Usar variables para acceder a los elementos de un array

let index = 4

document.write("La variable index corresponde a: "+numbers[index]+"<br>")

//modificar los elementos de un array

numbers[0] = 10
numbers[2] = 30

document.write("El array modificado es: "+numbers+"<br>")

document.write("<h3>LA LONGITUD DE UN ARRAY</h3>")

const frutas = ["manzana", "pera", "plátano", "fresa"]
document.write("El array de frutas es:" +frutas+ "<br>")
document.write("El arrays de frutas tiene una longitud de: "+frutas.length+ "<br>")

//añadir un elemento, eliminarlo, buscarlo, etc.

document.write("<h2>METODOS DE ARRAY</h2>")

//Añadir un elemento al final

document.write(("<h4> .push() </h4>"))

const fruta = ["plátano", "fresa"]

document.write("El array de fruta es:" +fruta.push("naranja")+"<br>")
document.write("El array de fruta añadido es: "+frutas+"<br>")

//Devuelve la nueva longitud del array

document.write("el array de fruta es:" +fruta.length+"<br>")

const newLength = fruta.push("naranja")
document.write("El array de: " +newLength+ "<br>")
document.write("El array de fruta: " +fruta+ "<br>")

//elimina y devuelve el último elemento de un array

document.write(("<h4> .pop() </h4>"))

const frutass = ["plátano", "fresa", "naranja"]
const ultimaFruta = frutas.pop()

document.write("El array de frutass es: "+frutass+ ("<br>"))
document.write("El array de utimafruta es: "+ultimaFruta+ ("<br>"))


//elimina y devuelve el primer elemento de un array

document.write(("<h4> .shift() </h4>"))

const primeraFruta = frutass.shift()

document.write("El array de frutass es: "+frutass+ ("<br>"))
document.write("El array de la primera fruta es: "+primeraFruta+ ("<br>"))

//añade un elemento al principio de un array

document.write(("<h4> .unshift() </h4>"))

document.write("El array añade una fruta es: "+frutass.unshift("manzana")+ ("<br>"))
document.write("El array de frutass es: "+frutass+ ("<br>"))

//Podemos concatenar dos arrays usando el método concat()


document.write(("<h4> .concat() </h4>"))

const numbers1 = [1, 2, 3]
const numbers2 = [4, 5]

const allNumbers = numbers1.concat(numbers2)

document.write("Los arrays que concatena son: "+allNumbers+ ("<br>"))


//En un restaurante se reciben pedidos de comida a domicilio. 
//Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:

document.write(("<h3> Ejercicio </h3>"))

function procesarPedido(pedidos) {

const cliente = pedido.shift()

pedido.unshift ("bebida")
pedido.push ("cliente")
return pedido
}

const pedidos = ['Carlos', 'café', 'bocadillo', 'patatas', 'postre']
document.write("El array de pedido es: "+procesarPedido("pedidos")+("<br>"))