// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// };

// // nama assign harus urut seperti yang didlm function
// // yg dimaksud ini ===> [tambah, kurang, kali, bagi]
// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(tambah);




// // Agar ukuran assign / destruturingnya tidak urut gunakan Object
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// };

// // Assign
// const { kurang, bagi, tambah, kali } = kalkulasi(2, 3);
// console.log(kali);




// Destruturing function arguments
// Tanpa Destruturing
const mhs1 = {
    nama: 'andi firmansyah',
    umur: 22,
    email: 'andifirmansyah@gmail.com',
    nilai: {
        tugas: 90,
        uts: 89,
        uas: 99
    }
};

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, dan umur saya ${mhs.umur}`;
// };

// console.log(cetakMhs(mhs1));

// Dengan Destruturing
// Ini destruturingnya ===> { nama, umur }
// Destrututing bersarang ===> nilai: {uas, tugas, uts}
function cetakMhs({ nama, umur, nilai: {uas, tugas, uts} }) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai tugas saya adalah ${tugas}`;
};

console.log(cetakMhs(mhs1));
