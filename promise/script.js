// Promise
// Object yg mempresentasikan keberhasilan atau kegagalan sebuat event yg asynchonous di masa yang akan mendatang

// janji (terpenuhi / diinkari)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)


// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
// 	if (ditepati) {
// 		resolve('Janji ditepati');
// 	} else {
// 		reject('Janji tak ditepati');
// 	}
// });
// janji1
// 	.then(response => console.log(`OK : ${response}`))
// 	.catch(response => console.log(`NOT OK : ${response}`));


// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
// 	if (ditepati) {
// 		setTimeout(() => {
// 			resolve('Janji ditepati...');
// 		}, 2000);
// 	} else {
// 		setTimeout(() => {
// 			reject('Ingkar janji...');
// 		}, 2000);
// 	}
// });

// console.log('mulai');
// janji2
// 	.finally(() => {console.log('proses telah selesai')})
// 	.then(response => {console.log(`OK : ${response}`)})
// 	.catch(response => {console.log(`NOT OK : ${response}`)});
// console.log('selesai');


// Promise.all()
const film = new Promise(resolve => {
	setTimeout(() => {
		resolve([{
			judul: 'avengers',
			sutradara: 'andi',
			pemeran: 'andi,suep'
		}])
	}, 1000);
})

const cuaca = new Promise(resolve => {
	setTimeout(() => {
		resolve([{
			kota: 'bandung',
			suhu: 20,
			kondisi: 'cerah berawan'
		}])
	}, 500);
})

Promise.all([film, cuaca])
	.then(response => {
		const [film,cuaca] = response;
		console.log(film);
		console.log(cuaca);
	})