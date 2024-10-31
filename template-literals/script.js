// // 2. looping 
// const mhs = [
//     {
//         nama: 'Andi Firmansyah',
//         email: 'andifirmansyah1@gmail.com'
//     },
//     {
//         nama: 'Himalaya Forsty',
//         email: 'forsty23@gmail.com'
//     },
//     {
//         nama: 'Humidity Tempsty',
//         email: 'tempsty23213@gmail.com'
//     }
// ];

// const el = `
//     <div class="mhs">
//         ${mhs.map( m => `
//             <ul>
//                 <li>${m.nama}</li>
//                 <li>${m.email}</li>
//             </ul>    
//         ` ).join('')}
//     </div>
// `;


const mhs = {
    nama: "Andi Firmansyah",
    semester: 6,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancagan Sistem Informasi',
        'Perancangan Sistem Berorientasi Object'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `<ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>`;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester: ${mhs.semester}</span>
    <h4>Mata Kuliah:</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;




document.body.innerHTML = el;