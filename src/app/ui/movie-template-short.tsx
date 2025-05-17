import Link from "next/link";
import MoviePoster from "./poster";

export default function MovieTemplateShort({
  original_title, 
  poster_path, 
  release_date,
  popularity,
  id }) {
  return (
    <div className="relative lg:row-span-2">
      <div className="absolute inset-px rounded-md bg-white"></div>
      <div className="relative flex h-full overflow-hidden rounded-md">
        <MoviePoster path={poster_path} name={original_title} size="medium" />
        <div className="p-4">
          <h4 className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{original_title}</h4>
          <p className="max-w-lg text-sm/6 text-gray-800 max-lg:text-center">Release date: {release_date}</p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-800 max-lg:text-center">Rating: <span className="text-blue-600">{Math.floor(popularity)}</span></p>
          <Link className="mt-10 text-gray-950 inline-block underline hover:no-underline" href={`details/${id}`}>Details</Link>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
    </div>
  );
}