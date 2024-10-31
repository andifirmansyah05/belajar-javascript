function cobaPromise() {
    return new Promise((resolve, reject) => {
        const time = 5000;
        if (time < 5000) {
            setTimeout(() => {
                resolve('Done...');
            }, time);
        } else {
            reject('Not yet...');
        }
        
    });
};

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (error) {
        console.log(error);
    }
}

cobaAsync();


// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba))