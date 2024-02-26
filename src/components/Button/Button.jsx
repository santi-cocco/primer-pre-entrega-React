import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={() => console.log('hice click')} className={classes.Button}>
      {props.label}
    </button>
  );
};

export default Button;
