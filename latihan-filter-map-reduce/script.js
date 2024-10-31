// Mengambil data jumlah video js lanjut dan berapa durasinya
const videos = Array.from(document.querySelectorAll('[data-duration'));
let listJsLanj = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    .map((item) => item.dataset.duration).map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1]
    }).reduce((total, detik) => total + detik);

let jam = Math.floor(listJsLanj / 3600);
let sisaJam = listJsLanj - jam * 3600;
let menit = Math.floor(sisaJam / 60);
let detik = sisaJam - menit * 60;
let jmlVideos = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

// menampilkan ke DOM
const displayJmlVideo = document.querySelector('.jumlah-video');
const displayTtlDurasi = document.querySelector('.total-durasi');
displayJmlVideo.textContent = `${jmlVideos} Video.`;
displayTtlDurasi.textContent =  `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
