const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');

    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
});

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=f5b22d2c&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search)
};

function updateUI(movies) {
    let cards = '';
    movies.forEach(movie => {
        cards += showMovie(movie);
        const movieContainer = document.querySelector('.movies-container');
        movieContainer.innerHTML = cards;
    })
};

// event binding
document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-details-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetails = await getMoviesDetail(imdbid);
        updateUIDetails(movieDetails);
    }
});


function getMoviesDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=f5b22d2c&i=' + imdbid)
        .then(response => response.json())
        .then(detailMovie => detailMovie)
};

function updateUIDetails(movieDetails) {
    const detail = showMovieDetails(movieDetails);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = detail;
};


function showMovie(movie) {
    return `<div class="col-md-4 my-3">
                            <div class="card">
                                <img src="${movie.Poster}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">${movie.Title}</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                                    <a href="#" class="btn btn-primary modal-details-button" data-bs-toggle="modal" data-bs-target="#moviesDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
                                </div>
                            </div>
                        </div>`
}


function showMovieDetails(dtl) {
    return `<div class="container-fluid">
                <div class="row">
                <div class="col-md-3">
                    <img src="${dtl.Poster}" class="img-fluid">
                </div>
                <div class="col-md">
                    <ul class="list-group">
                    <li class="list-group-item">
                        <h4>
                        ${dtl.Title} (${dtl.Year})
                        </h4>
                    </li>
                    <li class="list-group-item">
                        <strong>Director : </strong> ${dtl.Director}
                    </li>
                    <li class="list-group-item">
                        <strong>Actors : </strong> ${dtl.Actors}
                    </li>
                    <li class="list-group-item">
                        <strong>Write : </strong> ${dtl.Writer}
                    </li>
                    <li class="list-group-item">
                        <strong>Plot : </strong><br> ${dtl.Plot}
                    </li>
                    </ul>
                </div>
                </div>
            </div>`
}