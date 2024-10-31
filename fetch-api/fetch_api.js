const getUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users/';
    const response = await fetch(url);
    return await response.json(); // agar bisa diolah dijadikan JSON disek (3 baris diatas utama untuk fetch api e/njupuk data teko api)
};

// Pengolahan data e / filter lah intine / njupuk data sing pengen dijupuk
const render = (users) => {                     // disimpen ng <li> (list)
    return users.map(({ id, name, email }) => `<li>${id}. ${name} (${email})</li>`).join('');
};

//   (async () => {
//     const users = await getUsers();
//     document.querySelector('#content').innerHTML = `<ul>${render(users)}</ul>`;
//   })();
// (async () => {  
//     try {
//         // fetch the users
//         const users = await getUsers();

//         // show the user list
//         document.querySelector('#content').innerHTML = `<ul>${render(users)}</ul>`;
//     } catch (err) {
//         // show the error message
//         document.querySelector('#message').textContent = err.message;
//     }
// })();

(async () => {
    // show the loading element
    const loadingElem = document.querySelector('#loading');
    loadingElem.innerHTML = 'Loading...';

    // simulate network delay
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(1000); // delay 2 seconds

    try {
        // fetch the users
        const users = await getUsers();

        // show the user list
        document.querySelector('#content').innerHTML = `<ul>${render(users)}</ul>`;
    } catch (err) {
        // show the error message
        document.querySelector('#message').textContent = err.message;
    } finally {
        loadingElem.innerHTML = '';
    }
})();