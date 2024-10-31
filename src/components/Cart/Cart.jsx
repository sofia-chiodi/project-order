import { useContext } from 'react';

import './cart.css';
import Modal from '../UI/Modal';
import Button from '../Button/Button';
import { currencyFormatter } from '../../util/formatting';
import CartContext from '../../store/CartContext';
import UserProgressContext from '../../store/UserProgressContext';
import CartItem from './CartItem';

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal open={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onIDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p>{currencyFormatter.format(cartTotal)}</p>
      <p>
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
