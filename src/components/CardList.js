import Card from './Card';

const CardList = ({ results }) => {
  let data = [];

  if (results) {
    data = results || [];
  }
  
  return (
    <div className="result">
      {data.map((item) => (
        <Card
          key={item.objectID}
          title={item.title}
          author={item.author}
          date={item.created_at}
        />
      ))}
    </div>
  );
};

export default CardList;
