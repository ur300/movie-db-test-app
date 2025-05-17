import MoviePoster from "./poster";
 
const genresRender = genresArr => {
  return genresArr?.map(item => item.name).join(", ");
};

const runtimeRender = minutes => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  let res = `${hours} hour`;
  if (hours > 1) {
    res += "s";
  }
  
  res += ` ${ mins.toString().padStart(2, '0') } minute`;
  
  if (mins > 1) {
    res += "s";
  }
  return res;
};

export default function MovieTemplateFull({
  original_title,
  overview,
  poster_path,
  release_date,
  popularity, 
  runtime,
  genres,
  original_language }) {

  return (
    <div className="relative lg:row-span-2">
      <div className="absolute inset-px rounded-md bg-white"></div>
      <div className="relative flex h-full overflow-hidden rounded-md">
        <MoviePoster path={poster_path} name={original_title} size="large" />
        <div className="p-4">
          <h2 className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{original_title}</h2>
          <p className="max-w-lg text-sm/6 text-gray-800 max-lg:text-center">Release date: {release_date}</p>
          <p className="mt-4 max-w-lg text-sm/6 text-gray-600 max-lg:text-center mb-10">{overview}</p>
          <p className="max-w-lg text-sm/6 text-gray-800 max-lg:text-center">Genres: {genresRender(genres)}</p>
          <p className="max-w-lg text-sm/6 text-gray-800 max-lg:text-center">Rating: <span className="text-blue-600">{Math.floor(popularity)}</span></p>
          <p className="max-w-lg text-sm/6 text-gray-800 max-lg:text-center">Runtime: {runtimeRender(runtime)}</p>
          <p className="max-w-lg text-sm/6 text-gray-800 max-lg:text-center">Language: {original_language}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
    </div>
  );
}