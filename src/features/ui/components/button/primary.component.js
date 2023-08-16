import style from './button.module.scss';

const Primary = ({ children, onClick, className }) => {
  return (
    <button className={`${style.primary} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Primary;