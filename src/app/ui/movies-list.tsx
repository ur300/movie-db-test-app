'use client'
import { use } from 'react';
import MovieTemplateShort from './movie-template-short';

export default function MoviesList({ movies }) {
  const { results } = use(movies);
  return (
    <section className="flex justify-center">
      <div className="mt-8 grid gap-16 grid-cols-2">
        { results.length === 0 ? <p>Nothing found</p>
          : results.map((movie) => <MovieTemplateShort key={movie.id} {...movie} />)
        }
      </div>
    </section>
  );
}