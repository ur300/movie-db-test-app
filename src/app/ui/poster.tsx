const BASE_IMAGE_URL = "https://image.tmdb.org/t/p";

const BACKDROP_SIZES = {
  small: "w300",
  medium: "w780",
  large: "w1280",
};

const POSTER_SIZES = {
  small: "w154",
  medium: "w500",
  large: "w1280",
};

type PosterProps = {
  path: string;
  type?: "poster" | "backdrop";
  size?: "small" | "medium" | "large";
  name?: string;
}

export default function MoviePoster({ path, type = "poster", size = "small", name = "" }: PosterProps) {
  const sizePath = type === "poster" ? POSTER_SIZES[size] : BACKDROP_SIZES[size];
  const url = `${BASE_IMAGE_URL}/${sizePath}${path}`;
  return (
    <img
      src={url}
      alt={name}
    />
  );
}