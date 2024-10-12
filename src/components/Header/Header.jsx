import './header.css';
import Logo from '../Logo/Logo';
import Cart from '../Cart/Cart';

const Header = () => {
  function handleOpenCart() {
    return console.log('Clicked');
  }

  return (
    <>
      <div className='header-container'>
        <Logo title='REACTFOOD' />
        <Cart itemCounter={5} openCart={handleOpenCart} />
      </div>
    </>
  );
};

export default Header;
