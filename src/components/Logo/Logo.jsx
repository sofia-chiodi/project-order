import logo from '../../assets/logo.jpg';
import './logo.css';

const Logo = ({ title }) => {
  return (
    <div className='logo-container'>
      <img src={logo} />
      <h1>{title}</h1>
    </div>
  );
};

export default Logo;
