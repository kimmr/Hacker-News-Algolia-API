import { useState } from 'react';

const SearchBar = (props) => {
  const { onSearch } = props;

  const [ searchText, setSearchText ] = useState('');

  const handleInput = (event) => {
    const text = event.target.value;
    setSearchText(text);
  }; 

  const handleEnterKeyPressed = (event) => {
    if(event.key === 'Enter') {
        onSearch(searchText);
    }
  };

  return (
    <div>
      <div className="control">
        <input
          className="input"
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          value={searchText}
          type="text"
          placeholder="Enter title"
        />
      </div>
    </div>
  );
};

export default SearchBar;
