//ejemplo de realise de una funcion que recibe un string y retorna un string
//para ejecutar el archivo se debe de ejecutar el comando tsc script.ts
function greet(name: string): string {
    return `Hello, ${name}!`;
}


console.log(greet("World"));