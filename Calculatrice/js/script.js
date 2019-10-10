/*const tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i=0; i<=tab.length; i++) {
    console.log(tab[i])
}*/

const tab = [];
const number = document.querySelectorAll(".bouton .number")
const a = document.querySelector(".text")

console.log(number);

for(let i =0; i <number.length; i++){
    number[i].addEventListener('click', function(){
        a.innerText = a.textContent + number[i].textContent;
    })
}

function resultat(){
    try {
        a.innerText = eval(a.textContent)   
    } catch {
        a.innerText = "Erreur"
    }
    
}

function effacer(){
    a.innerText = 0;
}