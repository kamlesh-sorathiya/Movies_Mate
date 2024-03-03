import React from "react";
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { useFetch } from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const SearchMovie = ({ apiPath }) => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [movie, setMovies] = useState([]);
  const { data, loading } = useFetch(apiPath + '?query=' + query);

  useEffect(() => {
    setMovies(data.results);
  }, [data])

  console.log('movie', loading);

  return (
    <section className='container mx-auto py-5'>
      <h1 className='mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Search Result for : {query}</h1>

      <div className='flex justify-center flex-wrap gap-8 '>
        {data.length <= 0 ? "No Result" :
          <>
            {loading ? <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'> Loading...</h1> :
              <>
                {movie && movie.map((movie, ind) => (
                  <MovieCard key={ind} id={ind} movie={movie} />
                ))}
              </>}
          </>
        }

      </div>
    </section>

  )
}
export default SearchMovie;
