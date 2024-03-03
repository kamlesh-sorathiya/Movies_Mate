/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_PATH_URL } from '../constants/apiConfig';
import noimage from '../assets/noImage.jpg'

const MovieCard = ({ movie }) => {

    const { id, title, overview, poster_path } = movie;
    let movie_path = null;

    // console.log('RE_RENDER HAPPEND')

    if (poster_path) {
        movie_path = IMAGE_PATH_URL + poster_path;
    }
    else {
        movie_path = noimage;
    }

    return (
        <div key={id} id={id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/movie/${id}`}>
                <img className="rounded-t-lg max-h-144 min-h-144 bg-cover" src={movie_path} alt="" />
            </Link>
            <div className="p-5">
                <Link to={`/movie/${id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
            </div>
        </div>
    )
}

// export default MovieCard;
export default React.memo(MovieCard);
