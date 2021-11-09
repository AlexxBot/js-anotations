//console.log('hola mundo')
/* const saludo = 'hola mundo'

console.log(saludo)
var nombre = 'jose'
if(saludo !=''){//scope
    var nombre = 'alex'
    var apellido = 'ttito'
    console.log('mi nombre es: ', nombre, 'y mi apellido es : ', apellido)
}

console.log(nombre) */

//arrow functions
//ES5
function suma2(a , b){
    return a + b
}
//ES6
/* const suma = (a, b) => a + b //
const cuadrado = a => a * a */

//console.log(suma(7,5))
//console.log(cuadrado(10))

/* const saludo = (nombre, genero = 'masculino', edad = '20') => {
    console.log(`my name is ${nombre}, mi genero es ${genero} y mi edad es ${edad}`)//interpolacion de texto
}

saludo('alex') */



/* function printName(name){
    var length = arguments.length;
    console.log('el numero de argumentos es: ' + length)
    var fullName = name+ ' : ' ;   
    for(var i=0; i< length; i++){
        fullName += ' ' + arguments[i]
    }
    console.log(fullName);
};
printName('Felipe'); // Felipe
printName('Alex', 'Juan', 'Froilan'); //Felipe Juan Froilan */


function sumaNumeros(){
    var length = arguments.length
    var sumaTotal = 0;
    for(var i=0; i< length; i++){
        //console.log('este es el argumento ' i + ' '+ arguments[i])
        sumaTotal += parseInt(arguments[i])
    }
    return sumaTotal
};


console.log('esta es la suma de los numeros : ' + sumaNumeros(1,2,3,4,5, 100))


//SPREAD OPERATOR ...

//from array to list
numeros = [1,2,3,4,5, 20]

//console.log('esta es la suma con spread operator: ', sumaNumeros(...numeros))

//
/* numeros2 = [...numeros, 29]

numeros3 = [26, ...numeros]

console.dir(numeros2)
console.dir(numeros3) */

var parts1 = ['shoulder', 'knees'];
var parts2 = ['chest', 'waist'];
var lyrics = ['head', ...parts1, ...parts2, 'and', 'toes'];

//console.dir(lyrics)


//destructuring
/* const [a, b, c, ...rest] = lyrics
console.log('this is a :')
console.dir(a)

console.log('this is b :')
console.dir(b)

console.log('this is c :')
console.dir(c)

console.log('this is the rest')
console.dir(rest) */

const [ , , , , , p, u] = lyrics

/* console.log('this is the rest')
console.dir(rest2) */

/* console.log('this is p :')
console.dir(p)

console.log('this is u :')
console.dir(u)
 */

const frutas = ['manzana', 'naranja', 'uva', 'sandia', 'platano', 'manzana2']

/* //map
const nroCarateres = frutas.map(fruta => fruta.length)

console.log('este es el arreglo mapeado con el numero de caracteres')

console.dir(nroCarateres)

console.log('este es el arreglo recorrido con foreach')

//foreach
frutas.forEach(fruta => console.log(fruta.slice(0,3)))

 */

/* const nroManzanas = frutas.filter(fruta => fruta.indexOf('manzana') >= 0);

console.log('este es el arreglo luego de filtrar las manzanas')
console.log(nroManzanas) */
//console.dir(nroManzanas)


/* const frutaEncontrada = frutas.find(fruta => fruta.indexOf('manzana') >=0)
console.log('this is the fruit finded with find method')
console.log(frutaEncontrada) */

/* const numerosPares = [1,3,5,9]

const sonPares = numerosPares.every(numero => numero % 2 == 0)

console.log(sonPares)


const algunoPar = numerosPares.some(numero => numero % 2 == 0)
console.log('some of those number are even')
console.log(algunoPar)

const nuevosNumeros = numerosPares.fill(0, 1, numerosPares.length)
console.dir(nuevosNumeros) */


//reduce

const numerosSuma = [ 2, 5, 7, 9, 10, 12]

var suma = 0 
for(let i =0; i < numerosSuma.length; i++){
    suma = suma + numerosSuma[i]
}
console.log('this is the result: ', suma)


console.log(' this is the result with reduce method', numerosSuma.reduce((acc, numero) => acc = acc + numero, -45))



const cadenas = ["Elber", "Galarga", "y", "Penelope", "Cruz"]

console.log('esta es la pareja del anio: ',cadenas.reduce((acc, value) => acc+=`${value} `, '').trim())



