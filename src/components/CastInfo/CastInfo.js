import s from './CastInfo.module.css';
const CastInfo = ({ cast }) => {
  return (
    <ul className={s.list}>
      {cast?.map(({ profile_path, name, character, cast_id }) => {
        return (
          <li key={cast_id} className={s.item}>
            <img
              className={s.image}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : require('../../images/no-photo-available-icon-20.jpg')
              }
              alt={name}
            />
            <p className={s.name}>{name}</p>
            <p className={s.character}>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CastInfo;
