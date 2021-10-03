import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';

import HackerNews from '../api/HackerNews';
import { useContext, useState } from 'react';
import SearchContext from '../store/SearchContext';

const Search = () => {
  const { searchHistory, setSearchHistory } = useContext(SearchContext);

  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await HackerNews.get(text);

    
    setSearchHistory((prevHistory) => {
      return [ {title: text, id: Math.random().toString()}, ...prevHistory ];
    });
    

    setState((prevState) => {
      return { ...prevState, results: results.data.hits };
    });
  };
  
  return (
    <div className="App">
      <div className="container SearchApp">
        <h2 className="title is-2 has-text-centered">
          Hacker News Search with API
        </h2>
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />
      </div>
    </div>
  );
};

export default Search;
