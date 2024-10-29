import './header.css';
import Logo from '../Logo/Logo';
import Cart from '../Cart/Cart';
import Button from '../Button/Button';

const Header = () => {
  function handleOpenCart() {
    return console.log('Clicked');
  }

  return (
    <>
      <div className='header-container'>
        <Logo title='REACTFOOD' />
        <Button label='Cart (0)' textOnly></Button>
      </div>
    </>
  );
};

export default Header;
