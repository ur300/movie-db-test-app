import MostPopularMovies from "@/app/ui/most-popular";
import MovieSearchWidget from "@/app/ui/movie-search-widget";

export default function Home() { 
  return (
    <main className="grow px-20">
      <MovieSearchWidget />
      <MostPopularMovies />
    </main>
  );
}
