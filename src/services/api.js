const baseURL = "https://api.themoviedb.org/3";

const getTrending = async () => {
    let req = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=1`);
    return await req.json();
}

export default api;