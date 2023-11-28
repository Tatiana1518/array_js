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
document.write("El arrayS de frutas tiene una longitud de: "+frutas.length+ "<br>")
