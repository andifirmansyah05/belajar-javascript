// // Tagged Templates
// const nama = 'Andi Firmansyah';
// const umur = 22;

// // catatan
// // ...namaVariabel ==> disebut dengan rest parameter
// function coba(strings, ...values) {
//     // let result ='';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // });
    
//     // return result;
    
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// };

// // catatan
// // ${exspression} ==> akan ditampung ke (...values)
// // `` ==> kutip dua ini disebut template literal
// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`

// console.log(str);





// Highlight
const nama = 'Andi Firmansyah';
const umur = 22;
const email = 'andfirsyah@gmail.com';

// catatan
// ...namaVariabel ==> disebut dengan rest parameter
function highlight(strings, ...values) {
    // let result ='';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`
    // });
    
    // return result;
    
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}
    </span>`, '' );
};

// catatan
// ${exspression} ==> akan ditampung ke (...values)
// `` ==> kutip dua ini disebut template literal
const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya : ${email}`;

document.body.innerHTML = str;