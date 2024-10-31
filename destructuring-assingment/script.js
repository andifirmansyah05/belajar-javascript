// // Destruturing Variabel / Assingment

// // Destruturing Array
// const perkenalan = ['halo', 'nama', 'saya', 'andi firmansyah'];

// // const [salam, satu, dua, nama] = perkenalan;

// // skip itemnya ==> tinggal tulis koma tapi ga ada nama variabelnya
// const [salam, , , nama] = perkenalan;
// console.log(nama);


// Swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);


// return value pada function
// function coba() {
//     return [1,2];
// };
// const [a,b] = coba();
// console.log(a);
// console.log(b);


// Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);


// Destruturing Object
// const mhs = {
//     nama: 'Andi Firmansyah',
//     umur: 22
// };

// // nama Variabel harus sama yng aada didalam Object nya
// const {nama, umur} = mhs;
// const {a, b} = mhs; ===> bakal undefined

// bisa tanpa deklarasi objek
// (
//     {nama, umur} = {
//         nama: 'andi firmansyah',
//         umur: 22
//     }
// );
// console.log(nama);

// Assing di nama variabel yg baru
// const mhs = {
//     nama: 'Andi Firmansyah',
//     umur: 22
// };

// // nama Variabel harus sama yng aada didalam Object nya
// const {nama: n, umur: u} = mhs;
// console.log(u);

// DAPAT MEMBERIKAN NILAI DEFAULT KE DALAM VARIABELNYA
// const mhs = {
//     nama: 'Andi Firmansyah',
//     umur: 22,
//     email: 'osadnsaodsnad@gmail.com'
// };

// // nama Variabel harus sama yng aada didalam Object nya
// const {nama: n, umur: u, email: e = 'andiansd@default.com'} = mhs;
// console.log(e);

// REST PARAMETER (...values) DENGAN OBJECT
// const mhs = {
//     nama: 'Andi Firmansyah',
//     umur: 22,
//     email: 'osadnsaodsnad@gmail.com'
// };

// const {nama: n, ...values} = mhs;
// // VALUES ISINYA AKAN OBJECT KARENA VARIABEL MHS ITU AWALNYA OBJECT
// console.log(values);


// MENGAMBIL FIELD PD OBJECT,  SETELAH DIKIRIM SBG PARAMETER UTK FUNCTION
// const mhs = {
//     id: 1234,
//     nama: 'Andi Firmansyah',
//     umur: 22,
//     email: 'osadnsaodsnad@gmail.com'
// };

// function getIdMhs({id}) {
//     return id;
// };
// console.log(getIdMhs(mhs));