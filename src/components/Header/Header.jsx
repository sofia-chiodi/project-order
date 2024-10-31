import { useContext } from 'react';

import './header.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import CartContext from '../../store/CartContext';
import UserProgressContext from '../../store/UserProgressContext';

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <>
      <div className='header-container'>
        <Logo title='REACTFOOD' />
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </div>
    </>
  );
};

export default Header;
