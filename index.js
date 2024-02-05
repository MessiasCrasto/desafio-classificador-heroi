/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/

let dadosHero = {nome:"CRASTO",xp:10001}
let nivel = "";

if (dadosHero.xp<=1000){
    nivel = "Ferro"
}
else if (dadosHero.xp>1000 && dadosHero.xp <=2000){
    nivel= "Bronze"
}
else if (dadosHero.xp>2000 && dadosHero.xp <=5000){
    nivel= "Prata"
}
else if (dadosHero.xp>5000 && dadosHero.xp <=7000){
    nivel= "Ouro"
}
else if (dadosHero.xp>7000 && dadosHero.xp <=8000){
    nivel= "Platina"
}
else if (dadosHero.xp>8000 && dadosHero.xp <=9000){
    nivel= "Ascendente"
}
else if (dadosHero.xp>9000 && dadosHero.xp <=10000){
    nivel= "Imortal"
}
else if ( dadosHero.xp >10000){
    nivel= "Radiante"
}


console.log("O Herói de nome "+ dadosHero.nome +" está no nível de "+ nivel)

