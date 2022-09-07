const BASE_URL = "https://api.themoviedb.org/3";

const getTrending = async () => {
    let req = await fetch(`${BASE_URL}/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=1`);
    return await req.json();
}

const getMovieInfo = async (id) => {    
    let req = await fetch(`${BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
    return await req.json();
}

const searchMovie = async (title) => {
    let encodedTitle = encodeURI(title);
    let req = await fetch(`${BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${encodedTitle}&page=1`);    
    return await req.json();
}

export {
    getTrending,
    getMovieInfo,
    searchMovie,
};