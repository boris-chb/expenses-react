import "./Card.css";

const Card = (props) => {
  const { children } = props;
  const classes = `card ${props.className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
