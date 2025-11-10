// /* Scrivere una funzione che accetti tre argomenti, un array e due numeri(a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.Non usare i metodi di array di JS(modificato)


let array = []
function arrayab(array, a, b) {
     if (a === b){
        console.log("I numeri sono uguali")
     }
     else if (a < b) {
        for (let i = a + 1; i < b; i++) {
            array.push(i)
        }
    }
    else if (a > b) {
        for (let i = b + 1; i < a; i++) {
            array.push(i)
        }
    }
    console.log(array)
    array.length = []
}
arrayab(array, 20, 40)
arrayab(array, 45, 30)
arrayab(array, 8, 8)