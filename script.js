
// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

const bici = [
   {nome: "Elektra", peso: 10},
   {nome: "Elektra", peso: 20},
   {nome: "Elektra", peso: 15},
   {nome: "Elektra", peso: 7},
   {nome: "Elektra", peso: 5},
]

 let biciLeggera = bici[0];

 for (let i = 1; i < bici.length; i++) {
     if (bici[i].peso < biciLeggera.peso) {
         biciLeggera = bici[i];
    }
    
 }
console.log("la bici con il peso minore è:",bici, biciLeggera.peso)

//     Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console


const campionato = [
    {nome :"Milan", puntifatti: 0, fallisubiti: 0},
    {nome: "Napoli", puntifatti: 0, fallisubiti: 0},
    {nome: "Roma", puntifatti: 0, fallisubiti: 0},
    {nome: "Juventus", puntifatti: 0, fallisubiti: 0},
    {nome: "Inter", puntifatti: 0, fallisubiti: 0},
    {nome: "Fiorentina", puntifatti: 0, fallisubiti: 0},
]
   for (let i = 0; i < campionato.length; i++){
    campionato[i].puntifatti = Math.floor(Math.random()*100)
    campionato[i].fallisubiti = Math.floor(Math.random()*50)
   }
console.log(campionato)

const NomieFalli = []

campionato.forEach(campionato => {
    NomieFalli.push({
        nome: campionato.nome,
        fallisubiti: campionato.fallisubiti
    })
})

console.log(NomieFalli)
