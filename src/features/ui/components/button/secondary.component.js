import style from './button.module.scss';

const Secondary = ({ children, onClick, className }) => {
  return (
    <button className={`${style.secondary} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Secondary;