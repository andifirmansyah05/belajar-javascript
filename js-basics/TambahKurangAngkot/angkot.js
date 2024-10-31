const jumlahAngkot = document.getElementById("jumlahAngkot");
let jumlahAwal = 0

function addAngkot() {
    jumlahAwal += 1;
    jumlahAngkot.textContent = jumlahAwal;
    console.log(jumlahAwal);
}

function removeAngkot() {
    jumlahAwal -= 1;
    jumlahAngkot.textContent = jumlahAwal;
    console.log(jumlahAwal);
}