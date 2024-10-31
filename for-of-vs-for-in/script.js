// for..of
// Array
// const mhs = ['andi', 'wan', 'eudora'];

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for (const m of mhs) {
//     console.log(m);
// }

// String
// const nama = 'Andi';
// for (const n of nama) {
//     console.log(n);
// }

// const mhs = ['andi', 'wan', 'eudora'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke - ${i + 1}`);
// });
// for of tidak punya index tapi bisa diakali dengan .entries()
// for (const [i,m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke - ${i + 1}`);
// };

// NodeList
// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);
// liNama.forEach(m => console.log(m));
// liNama.forEach(m => console.log(m.textContent));
// for (n of liNama) {
//     console.log(n);
// }
// for (n of liNama) {
//     console.log(n.textContent);
// }


// Arguments
// function penjumlahan() {
//     // di .reduce() ga bs krn bkn array
//     // return arguments.reduce((a,i) => a + i);
//     // .forEach() juga ga bs
//     // arguments.forEach(j => {
//     //     jumlah += j;
//     // });

//     // pakek for..of itu bs
//     let jumlah = 0;
//     for (j of arguments) {
//         jumlah += j;
//     }
//     return jumlah;
// }

// console.log(penjumlahan(1, 2, 3, 4, 5));


///////////////////////////////////////////////////////////////

// for..in
const mhs = {
    nama: 'andi firmansyah',
    umur: 22,
    email: 'andifirmansyah022@gmail.com'
}

for (m in mhs) {
    console.log(m); // ini muncul propertynya aja
}

for (m in mhs) {
    console.log(mhs[m]); // ini isi dari propertynya (m akan bertindak sbg indexnya)
}