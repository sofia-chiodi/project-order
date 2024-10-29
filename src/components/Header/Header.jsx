import './header.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <>
      <div className='header-container'>
        <Logo title='REACTFOOD' />
        <Button textOnly>Cart ({totalCartItems})</Button>
      </div>
    </>
  );
};

export default Header;
