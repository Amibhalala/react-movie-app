import { getMovies } from "api/movies";
import React, { useEffect, useReducer } from "react"
import { Movie,MoviesAction } from "types"
import { v4 as uuid } from 'uuid';
interface MoviesState {
    movies: Movie[],
    initialized: Boolean
}
export function useMoviesReducer(): [MoviesState,React.Dispatch<MoviesAction>]{
    const moviesReducer=(state:MoviesState,action:MoviesAction):MoviesState=>{
        switch(action.type){
            case 'fetch':
                return {...state,initialized:true,movies:[...action.payload.data]}
            case 'add':
                return {...state,movies:[...state.movies, {...action.payload.movie,id:uuid(),ratings:[]}]}
            case 'delete':
                const movies= state.movies.filter((movie)=> movie.id !== action.payload.movieId);
                return {...state,movies};
            case 'rate':
                return { ...state };
            default:
                return state
        }
    }
    const [state,dispatch] = useReducer(moviesReducer,{
        movies:[],
        initialized: false,
    });
    useEffect(()=>{
        getMovies().then((result)=>dispatch({type:'fetch',payload:{data:result}}));
    },[])
    return [state,dispatch]
}