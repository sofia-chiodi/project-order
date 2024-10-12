import './cart.css';

const Cart = ({ itemCounter, openCart }) => {
  return (
    <div className='cart-container'>
      <h2 onClick={openCart}>Cart ({itemCounter})</h2>
    </div>
  );
};

export default Cart;
