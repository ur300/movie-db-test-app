"use client"

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getMovieById } from "@/app/api";
import MovieTemplateFull from '@/app/ui/movie-template-full';

export default function Page() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await getMovieById(id);
        setMovie(res);
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (<p>Loading...</p>);
  }
  
  return <MovieTemplateFull {...movie } />;
}