const calcAverage=(a,b,c)=>(a+b+c)/3;
console.log(calcAverage(3,4,5));

let scoreDolphines= calcAverage(44,23,71);
let scoreKoalas=calcAverage(65,54,49);
console.log(scoreDolphines,scoreKoalas);

const checkWinner= function (avgDolphines,avgKolas)
    {
     if (avgDolphines>=2*avgKolas){
        console.log(`Dolphins win (${avgDolphines}vs. ${avgKolas})`);
     }else if (avgKolas>=2*avgDolphines){
        console.log(`Koalas win (${avgKolas}vs. ${avgDolphines})`);
    } else{
        console.log('No team wins...');
    }
    }
    checkWinner(scoreDolphines,scoreKoalas);
     checkWinner(576,111);