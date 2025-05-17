"use client"
import { Providers } from '@/app/store/store-provider'
import MovieSearchResults from "@/app/ui/search-results";
import MovieSearchPanel from "@/app/ui/search-panel";

export default function MovieSearchWidget() {
  return (
    <Providers>
      <div className="flex justify-end">
        <MovieSearchPanel />
      </div>
      <MovieSearchResults />
    </Providers>
  );
}