import './Random.css';
const Random = (props) => {
  const Number = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return (
    <div className="random-container">
      <p>
        Random value between {props.min} and {props.max} ={' '}
        {Number(props.min, props.max)}
      </p>
    </div>
  );
};

export default Random;
