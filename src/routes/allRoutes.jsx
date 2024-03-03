import { Route, Routes } from 'react-router-dom';
import MovieList from '../pages/movieList';
import MovieDetail from '../pages/movieDetail';
import PageNotFound from '../pages/404';
import SearchMovie from '../pages/searchMovie';
import { MOVIES_API_URL, TOPRATED_MOVIES_API_URL, POPULAR_MOVIES_API_URL, UPCOMING_MOVIES_API_URL, MOVIES_DETAIL_API_URL, SEARCH_MOVIES_API_URL } from '../constants/apiConfig';


const AllRoutes = () => {


  return (
    <main>
      <Routes>
        <Route path='/' element={<MovieList apiPath={MOVIES_API_URL} title="Home" />} />
        <Route path='/movies/popular' element={<MovieList apiPath={POPULAR_MOVIES_API_URL} title="Popular" />} />
        <Route path='/movies/toprated' element={<MovieList apiPath={TOPRATED_MOVIES_API_URL} title="TopRated" />} />
        <Route path='/movies/upcoming' element={<MovieList apiPath={UPCOMING_MOVIES_API_URL} title="Upcoming" />} />
        <Route path='/movie/:id' element={<MovieDetail apiPath={MOVIES_DETAIL_API_URL} />} />
        <Route path='/search' element={<SearchMovie apiPath={SEARCH_MOVIES_API_URL} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </main>
  )
}

export default AllRoutes;