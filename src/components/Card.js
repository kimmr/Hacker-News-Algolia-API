const Card = (props) => {

    return(
        <div className='resultCard'>
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <h3>{props.date}</h3>
        </div>
    );
    
};

export default Card;