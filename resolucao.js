const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome
let xp
let niveis = [
    [10001, "Radiante"],
    [9001, "Imortal"],
    [8001, "Ascendente"],
    [7001, "Platina"],
    [5001, "Ouro"],
    [2001, "Prata"],
    [1001, "Bronze"],
    [-1, "Ferro"],

]
let nivel
let contador = 0

readline.question("Qual é o nome do seu herói? ", (n) => {
    nome = n;

    readline.question("Qual é o XP do seu herói? ", (x) => {
        xp = parseInt(x);
    
        while(true){
            if(xp > niveis[contador][0]){
                nivel = niveis[contador][1]
                break
            }
            contador++
        }
        
        console.log("O nome do herói é: " + nome + " e o seu nível é: " + nivel)

    readline.close()
});
});
