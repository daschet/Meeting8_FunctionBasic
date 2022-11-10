// function statement(parameter1, parameter2) {
//     return `Hello ${parameter1} and ${parameter2}`
// }

// const sapa2 = statement("mario", "luigi")

// console.log(sapa2)




// function diskon(discount) {
//     let base_price = 25000;
//     let hitung = base_price - (base_price*discount/100)
// return `harga baju bulan ini adalah Rp.${hitung},-`
// }
    
// const jan = diskon(10);
// const feb = diskon(50);
// const mar = diskon(70);

// console.log(feb);

// function agecount(year_born) {
//     let a = new Date;
//     const b = (a.getFullYear())
//     const c = b - year_born
//     return `Umur anda sekarang adalah ${c}`
// }
// console.log(agecount(1000));

// function blabla(){

// }
// //function declarative

// const bleble = function (){

//function expression

const pangkat = (base_number, power_number) => {
const cal = Math.pow(base_number, power_number);
return cal
}
console.log(pangkat(4,4));

//function arrow(expression)