import classes from './FormInput.module.css';

export const Input = ({ plaseholder, ...props }) => {
  return (
    <div className={classes.input}>
      <input
        className={classes.formInput}
        placeholder={plaseholder}
        {...props}
      />
    </div>
  );
}