

// Objetos en JavaScript entre llaves

const user = {
    name: 'Layonar',
    lastname: 'Mendoza',
    age: 20,
    address: {
        country: 'Colombia',
        city: 'Playas',
        street: 'main street 123'
    },
    active: true


}
console.log(user);




//funciones con parametros
/* function suma (x=0,y=0){
    return x + y;
}
console.log(suma(10));
console.log(suma(undefined, 3)); */


/* function nombre (name){
    return 'Hola ' + name;
}
 // A las funcines se les puede pasar varios valores a sus parametros
console.log(nombre('Lamg'));
console.log(nombre('susan')); */



// js una funcion puede retornar otra funcion
//Programacion funcional usada mucho en REACT
/* function hello(){

    return function(){
        return 'Saludos';
    }
    //return [1, 3, 4]; //arreglo
    //return {nombre: 'Layonar'}; objeto
}
console.log(hello()()); */