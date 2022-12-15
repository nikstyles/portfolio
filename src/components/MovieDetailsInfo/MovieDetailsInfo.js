import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import s from './MovieDetailsInfo.module.css';

const StyledLink = styled(NavLink)`
  background: grey;
  &.active {
    background: #11005c;
  }
  &.active:hover {
    background: #11005c;
  }
`;

const MovieDetailsInfo = ({ details }) => {
  const { poster_path, original_title, vote_average, overview, genres } =
    details;
  return (
    <main>
      <div className={s.container}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title}
          className={s.img}
        />
        <div className={s.description_container}>
          <h1>{original_title}</h1>
          <p>User Score: {Math.round(vote_average * 10)}% </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={s.list}>
            {genres?.map(({ name }) => (
              <li key={name} className={s.item}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.wrap}>
        <h3>Additional information</h3>
        <StyledLink to={`cast`} className={s.link_btn}>
          <p>Cast</p>
        </StyledLink>
        <StyledLink to={`reviews`} className={s.link_btn}>
          <p>Reviews</p>
        </StyledLink>
      </div>
      <Outlet />
    </main>
  );
};

export default MovieDetailsInfo;
