import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBMoviesResponse } from '../interface/movieInterface';

interface MoviesState {
    nowPlaying:Movie[];
    popular:Movie[];
    topRated:Movie[];
    upcoming:Movie[];
}


export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [moviesState,setMoviesState] = useState<MoviesState>({
        nowPlaying:[],
        popular :[],
        topRated :[],
        upcoming:[]
    })


    const getMovies =async ( ) =>{

         //se Crearia Resolucion de las Promesas con .then() que es el que disparala peticion 
          const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
          const popularPromise    =  movieDB.get<MovieDBMoviesResponse>('/popular');
          const topRatedPromise   =  movieDB.get<MovieDBMoviesResponse>('/top_rated');
          const upcomingPromise   = movieDB.get<MovieDBMoviesResponse>('/upcoming');
        
          //dentro de Promise puedo ejecutar todas las promesas de forma simultanea
          const resp = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ]);

        setMoviesState({
            nowPlaying: resp[0].data.results ,
            popular: resp[1].data.results,
            topRated: resp[2].data.results,
            upcoming: resp[3].data.results
        })
        
        setIsLoading(false)
    }
  
    //Dispara una peticion get para traer las peliculas
   useEffect(() => {
    //now playing
    getMovies()
  }, [])
  
  
    return{
        // se puede hacer asi nowPlaying:moviesState?.nowPlaying
        ...moviesState,
        isLoading
    }
}
