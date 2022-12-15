import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(movie => {
          const { id, title } = movie;
          return (
            <li key={id} className={s.link}>
              <Link
                to={`/movies/${id}/`}
                state={{ from: location }}
                className={s.link}
              >
                <p className={s.title}>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
