// eslint-disable-next-line react/prop-types
const Button = ({type, className, onClick, disabled, children}) => {
  return (
    <button
      type={type || 'button'}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
