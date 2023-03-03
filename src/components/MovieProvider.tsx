import React, { useContext, useState } from "react";
import {Movie, MoviesAction} from "types";
import { useMoviesReducer } from "./useMoviesReducer";


type MovieProviderProps= {
    children: React.ReactNode
}
type MovieContextType= {
    movies:Movie[],
    moviesDispatch:React.Dispatch<MoviesAction>
}
export const MovieContext= React.createContext<MovieContextType|undefined>(undefined);
export const MovieProvider: React.FC<MovieProviderProps> = ({children}) =>{
    const [{initialized,movies},moviesDispatch]=useMoviesReducer();
    return (
        <MovieContext.Provider value={{movies,moviesDispatch}}>
            {initialized ? children : <div>Loader...</div>}
        </MovieContext.Provider>

    )

}

export const useMovies = () => {
    const movieContext=useContext(MovieContext);
    if(!movieContext){
        throw new Error('Component beyond MovieContext!')
    }
    return movieContext;
}
