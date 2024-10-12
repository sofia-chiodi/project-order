import './cart.css';

const Cart = ({ itemCounter, openCart }) => {
  return (
    <div>
      <h2 onClick={openCart}>Cart ({itemCounter})</h2>
    </div>
  );
};

export default Cart;
