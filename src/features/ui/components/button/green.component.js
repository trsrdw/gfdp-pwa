import style from './button.module.scss';

const Green = ({ children, onClick, className }) => {
  return (
    <button className={`${style.green} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Green;