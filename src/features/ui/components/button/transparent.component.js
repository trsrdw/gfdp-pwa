import style from './button.module.scss';

const Transparent = ({ children, onClick, className }) => {
  return (
    <button className={`${style.transparent} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Transparent;