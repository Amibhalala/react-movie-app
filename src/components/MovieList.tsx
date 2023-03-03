import { useMovies } from "./MovieProvider";
import { Card } from "shared/components/Card";
export const  MovieList = () => {
    const {movies, moviesDispatch}= useMovies();
 return (
    <div className="card-deck">
      {
         movies.map((movie)=>(
            <Card key={movie.id}>
               <MovieCard key={movie.id} movie={movie}/>
            </Card>
         ))
      }
    </div>
 )   
}