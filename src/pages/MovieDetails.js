import { useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../API/movie-api';
import MovieDetailsInfo from 'components/MovieDetailsInfo';
import s from './MovieDetails.module.css';
import { IoMdArrowRoundBack } from 'react-icons/io';

const MovieDetails = () => {
  const location = useLocation();
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(Number(movieId)).then(details => setDetails(details));
  }, [movieId]);

  return (
    <>
      <Link to={backLink} className={s.back_link}>
        <IoMdArrowRoundBack size={'18px'} /> Go Back
      </Link>
      {details && <MovieDetailsInfo details={details} />}
    </>
  );
};

export default MovieDetails;
