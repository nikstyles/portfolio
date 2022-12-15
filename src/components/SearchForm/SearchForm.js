import { useState } from 'react';
import s from './SearchForm.module.css';

const SearchForm = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleFilmChange = ev => {
    setQuery(ev.currentTarget.value.toLowerCase());
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    if (query.trim() === '') {
      return;
    }
    const queryString = query;
    setSearchParams({ query: queryString });
    setQuery('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        <input
          className={s.input}
          type="text"
          name="search"
          onChange={handleFilmChange}
          value={query}
        />
      </label>
      <button className={s.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
