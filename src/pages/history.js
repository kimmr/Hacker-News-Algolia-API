import { useContext } from 'react';
import HistoryList from '../components/HistoryList';
import SearchContext from '../store/SearchContext';

const History = () => {
  const msg = useContext(SearchContext).searchHistory;

  let data = [];

  // Add to data as an array
  if (msg) {
    data = msg || [];
  }

  return (
    <div className="result">
      {data.map((item) => (
        <HistoryList key={item.id} title={item.title} />
      ))}
    </div>
  );
};

export default History;
