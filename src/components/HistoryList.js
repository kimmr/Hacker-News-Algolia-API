import Card from './UI/Card';
import './Search.css';

const HistoryList = (props) => {
  return (
    <ul>
      <Card className="search">
        <div className="search__title">
          <h2>{props.title}</h2>
        </div>
      </Card>
    </ul>
  );
};

export default HistoryList;
