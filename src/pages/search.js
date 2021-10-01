import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';

import HackerNews from '../api/HackerNews';
import { useState } from 'react';


const Search = () => {

  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await HackerNews.get(text);

    setState((prevState) => {
      return { ...prevState, results: results.data.hits };
    });
  };


  return (
    <div className="App">
      <div className="container SearchApp">
        <h2 className="title is-2 has-text-centered">React Search with API</h2>
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />
      </div>
    </div>
  );
};

export default Search;
