// Spread Operator
// memecah iterables jadi single element

// const mhs = ['andi','clock','humans'];
// console.log(...mhs[0]);

// const mhs = ['andi', 'clock', 'humans'];
// const dosen = ['robi', 'bogi', 'logit'];
// // const orang = [mhs, dosen]
// // const orang = mhs.concat(dosen); // ==> sama kek yang atas hasilnya dan tdk bs tambah array lain kek spread
// // const orang = [...mhs, ...dosen];
// const orang = [...mhs, 'sido', ...dosen]; // ==> spread bs nambahkan array lain
// console.log(orang);


// mengcopy array
// const mhs = ['andi','vektor','rots'];
// // const mhs1 = mhs; // ==> ini bkn mengcopy
// const mhs1 = [...mhs]; // ==> ini baru mengcopy
// mhs1[0] = 'liam';
// console.log(mhs);
// console.log(mhs1);
// const liNama = document.querySelectorAll('li');
// const mhs = [...liNama].map(m => m.textContent);
// console.log(mhs);

// Contah Pengaplikasian
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;