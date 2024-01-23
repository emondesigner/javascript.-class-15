// document.write(10 + 2)
// document.write(10 - 2)
// document.write(10 * 2)
// document.write(10 / 2)
// document.write(10 % 2)

// // let num =10;
// // document.write(++num)



// Assignment operator start
// let a =10;
// // a = a-20;
// a -= 50;
// document.write(a)
// Assignment operator end


// comparison operator start
let c =50;
let d =51;
document.write(c < d)
// document.write(c == d)
// comparison operator end

let e ='Emon';
let f ='das';
document.write(`My first name is ${e}My last name is ${f}`)






// let print = (userName)=>{
//     document.write(userName)
// }
// print('ripon')
// print('emon')

// let num1 =Number(prompt(`Enter number`));
// let num2 =Number(prompt(`Enter number`));

// document.write(num1 + num2);



// condition start
let num = Number(prompt(`Enter Number`))

if (num / 2 === 5){
    document.write(` True `)
}
else{
    document.write(` False `)
}
// condition end




let examNumber = 100;
if(examNumber >= 80 && examNumber <= 100){
    document.write(` A+ `)
}
else if(examNumber >=70 && examNumber<80){
    document.write(` A `)
}
else if(examNumber >=60 && examNumber<70){
    document.write(` A- `)
}
else if(examNumber >=50 && examNumber<60){
    document.write(` B `)
}
else if(examNumber >=40 && examNumber<50){
    document.write(` C `)
}
else if(examNumber >=33 && examNumber<40){
    document.write(` D `)
}
else if(examNumber >=0 && examNumber<33){
    document.write(` F `)
}
else{
    document.write(` Invalid Number `)
}


function print(username){
    document.write(username);
   }
   print(` Emon `);
   print(' Das');
