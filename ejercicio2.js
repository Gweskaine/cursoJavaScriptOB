/*Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)*/
let nombre = "Diana"
let edad = 37
let desarrollador = true
let fecha_nacimiento = new Date(1985,6,7)
let libro = {
    titulo: "Cándido",
    autor: "Voltaire",
    fecha: 1759,
    url:"https : //www.cjpb.org.uy/wp-content/uploads/repositorio/serviciosAlAfiliado/librosDigitales/Voltaire-Candido.pdf"
}
let atributos = [nombre, edad, desarrollador, fecha_nacimiento, libro]
console.log(atributos)
