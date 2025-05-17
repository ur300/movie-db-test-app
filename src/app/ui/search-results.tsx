"use client"
import { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { findMovieByName } from "@/app/api";
import MoviesList from '@/app/ui/movies-list';

export default function MovieSearchResults() {
  const searchQuery = useSelector((state: RootState) => state.movieSearch)
  const [results, setResults] = useState();

  useEffect(() => {
    if (!searchQuery) {
      setResults(null);
      return;
    }
    setResults(findMovieByName(searchQuery));
    }, [searchQuery]);
  
  return (
    <> {
        results ? <>
          <h1 className="text-3xl font-bold flex gap-1">
            <span className="text-gray-600">Search results</span>
          </h1>
          <Suspense fallback={<div>Loading...</div>}>
            <MoviesList movies={results} />
          </Suspense>
        </>
        : null
      }
    </>
  );
}