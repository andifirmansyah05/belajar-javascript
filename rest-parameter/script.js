// Rest parameter

// function myFun() {
//     // return myArr;
//     // return arguments;
//     return [...arguments]; // ==> ubah jadi array
// }

// console.log(myFun(1, 2, 3, 4, 5));


// function kalkulator(...angka) {
//     // let total = 0;
//     // for (a of angka) {
//     //     total += m;
//     // }
//     // return total;
//     return angka.reduce((a, b) => a + b);
// };

// console.log(kalkulator(1, 2, 3, 4, 5));


// array destruturing
// const kelompok1 = ['andi', 'sugeng', 'parno', 'suep', 'kirop'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// Object destruturing
// const team = {
//     pm: 'andi',
//     frontEnd1: 'samsul',
//     frontEnd2: 'agus',
//     backEnd: 'kupro',
//     ux: 'hanum',
//     devOps: 'furry'
// }
// const {pm, ...myTeam} = team;
// console.log(pm);
// console.log(myTeam);

/////////////////////////////////////////////////////////////
// Filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
};
console.log(filterBy('number', 1, 2, 4, true, 'asdsad', 'lopl', false, 'o22adsa', 102));
console.log(filterBy('string', 1, 2, 4, true, 'asdsad', 'lopl', false, 'o22adsa', 102));
console.log(filterBy('boolean', 1, 2, 4, true, 'asdsad', 'lopl', false, 'o22adsa', 102));