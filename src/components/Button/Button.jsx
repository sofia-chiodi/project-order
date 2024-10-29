import './Button.css';

const Button = ({ label, textOnly, className, ...props }) => {
  let cssClasses = textOnly ? `text-button ${className}` : 'button';
  cssClasses += ' ' + className;
  return (
    <button className={cssClasses} {...props}>
      {label}
    </button>
  );
};

export default Button;
