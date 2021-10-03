import SearchList from '../components/SearchList';
import SearchBar from '../components/SearchBar';

import HackerNews from '../api/HackerNews';
import { useContext, useState } from 'react';
import SearchContext from '../store/SearchContext';

const Search = () => {
  const { setSearchHistory } = useContext(SearchContext);

  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await HackerNews.get(text);

    setSearchHistory((prevHistory) => {
      return [{ title: text, id: Math.random().toString() }, ...prevHistory];
    });

    setState((prevState) => {
      return { ...prevState, results: results.data.hits };
    });
  };

  return (
    <div className="App">
      <div className="container SearchApp">
        <h1 className="title is-2 has-text-centered">
          Hacker News Search with API
        </h1>
        <SearchBar onSearch={onSearch} />
        <SearchList results={state.results} />
      </div>
    </div>
  );
};

export default Search;
