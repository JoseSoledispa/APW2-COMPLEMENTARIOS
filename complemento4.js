//4. Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando un do-while.//

const comidas = [
    "salchipapa",
    "apanado",
    "pizza",
    "lasaña",
    "costilla"
]
let i = 0;
do {
    console.log(comidas[i]);
    i++;
}
while (i < comidas.length)