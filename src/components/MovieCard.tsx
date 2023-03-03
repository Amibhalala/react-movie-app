import { useMovies } from "./MovieProvider";
import { Card } from "shared/components/Card";
import { Movie } from "types";
import { Button } from "shared/components/Button";

interface MovieCardProps{
   movie:Movie
}
export const  MovieCard = ({movie}:MovieCardProps) => {
    const {moviesDispatch}= useMovies();
 return (
   <div data-testid={`movie-item-${movie.id}`}>
      <img className="card-img-top" src={movie.imageUrl}/>
      <div className="card-body">
         <h3 className="card-title">
               {movie.title}
    
      </h3>
      <h4 className="card-subtitle mb-2">
         {movie.subtitle}
      </h4>
      <p className="text-center">
         {movie.description}
      </p>
      <Button  onClick={()=>moviesDispatch({type:"delete",payload:{movieId:movie.id}})}>Delete</Button>
      </div>
    </div>
 )   
}