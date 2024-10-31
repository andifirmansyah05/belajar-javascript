// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan nama: ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));


// const mhs = [
//     {
//         "nama": "Andi Firmansyah",
//         "nrp": "5001201010",
//         "email": "andifirmansyah@gmail.com",
//         "jurusan": "Fisika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Agus Setiaawan",
//         "nrp": "5001201022",
//         "email": "agussetiawan@gmail.com",
//         "jurusan": "Fisika",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Nikel Romansyah",
//         "nrp": "5001201042",
//         "email": "nikelromansyah@gmail.com",
//         "jurusan": "Fisika",
//         "idDosenWali": 2
//     }
// ]

// mhs.forEach(mhs => console.log(mhs.nama));


///////////////////////////////////
// Asynchonous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => {
//         console.log(m.nama);
//     });
// }, () => {

// });
// console.log('selesai');


// jQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => {
            console.log(m.nama);
        });
    },
    error: (e) => {
        console.log(e.responseText);
    }

})
console.log('selesai');