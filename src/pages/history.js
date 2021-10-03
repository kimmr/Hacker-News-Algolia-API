import { useContext } from 'react';
import Card from '../components/Card';
import SearchContext from '../store/SearchContext';

const History = () => {
  const msg = useContext(SearchContext).searchHistory;

  let data = [];

  if (msg) {
    data = msg || [];
  }


  return (
    <div className="result">
      {data.map((item) => (
        <Card key={item.id} title={item.title} />
      ))}
    </div>
  );
};

export default History;
