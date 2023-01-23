let i = 0;
let baseDatos = [];
function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
do {
    let nombre = prompt('ingrese su nombre');
    let apellido = prompt('ingrese su apellido');
    let nuevaPersona = new Persona(nombre, apellido);
    baseDatos.push(nuevaPersona);
    i++
} while (i < 3);
console.log(baseDatos)
alert(`ingresaste ${baseDatos.length} personar y si quieres ver los datos preciona f12 y ve al apartado de consola`)

