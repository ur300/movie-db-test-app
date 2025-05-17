import { Suspense } from 'react';
import { FireIcon } from '@heroicons/react/16/solid';
import { getPopularMovies } from '@/app/api';
import MoviesList from '@/app/ui/movies-list';

export default function MostPopularMovies() {
  const movies = getPopularMovies();
  return (
    <> 
      <h1 className="text-3xl font-bold flex gap-1">
        <span className="text-gray-600">Browse most popular movies</span>
        <FireIcon width={24} className="text-orange-500"/>
        <FireIcon width={24} className="text-orange-500"/>
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesList movies={movies} />
      </Suspense>
    </>
  );
}