import React from "react";
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { useFetch } from '../hooks/useFetch';
import useUpdatePageTitle from '../hooks/useUpdatePageTitle';


// eslint-disable-next-line react/prop-types
const MovieList = ({ apiPath, title }) => {

  const [movie, setMovies] = useState([]);
  const [a, setA] = useState();
  const { data, loading } = useFetch(apiPath);


  useEffect(() => {
    console.log('click trigger');
    setMovies(data.results);
  }, [data, a])

  useUpdatePageTitle(title);

  return (
    <>
      <section className='container max-w-7xl mx-auto py-5'>
        <div className='flex justify-start flex-wrap gap-10' onClick={(e) => setA(e)}>
          {loading ? <h1 className='mb-2 text-2xl font-bold tracking-tight text-white dark:text-white'> Loading... </h1> :
            <>
              {movie && movie.map((movie, ind) => (
                <MovieCard key={ind} id={ind} movie={movie} />
              ))}
            </>}
        </div>
      </section>
    </>
  )
}
export default MovieList;
