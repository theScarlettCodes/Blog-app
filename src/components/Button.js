const Button = (props) => {
  const buttonEnableDisable = !props.isDisabled
    ? styles.buttonDisabled
    : styles.buttonEnabled;
  return (
    <button
      id={props.id}
      className={props.buttonCustomStyle + styles.button + buttonEnableDisable}
      onClick={props.clickHandler}
      type={props.type}
      disabled={props.isDisabled}
    >
      {props.value}
    </button>
  );
};

const styles = {
  button: `
  bg-[primary]
  text-[#000]
  font-medium
  text-xl
  text-antialiased
  hover:bg-primary
  hover:text-white
  text-center 
  rounded-full
  w-auto
  h-auto
  px-[2rem]
  py-[.2rem]
  my-0
  mx-auto
    `,
  buttonEnabled: `
    border  
    border-solid 
    border-ash
    bg-ash
    rounded-2xl 
    disabled:hover:bg-[#6c757d]
    disabled:text-[#747373]
    `,

  buttonDisabled: `
    border
    border-solid 
    border-[#4f4e4e]
    bg-transparent
    
  `,
};

Button.defaultProps = {
  type: "button",
  disabled: false,
};

export default Button;
