import { useContext } from 'react';

import './cart.css';
import Modal from '../../store/CartContext';
import CartContext from '../../store/CartContext';
import Button from '../Button/Button';
import { currencyFormatter } from '../../util/formatting';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  return (
    <Modal>
      <h2>Your Cart</h2>
      <ul>
        {CartContext.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p>{currencyFormatter.format(cartTotal)}</p>
      <p>
        <Button textOnly>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
