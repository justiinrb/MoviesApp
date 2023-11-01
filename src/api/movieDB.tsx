import axios from 'axios';

const movieDB =axios.create({
    baseURL :'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'823e88e237630e214d850a9b8e289b1a',
        language:'es-ES'
    }
});

export default movieDB;