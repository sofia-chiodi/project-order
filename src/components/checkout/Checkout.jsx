import CartContext from '../../store/CartContext';
import Modal from '../UI/Modal';
import Input from '../UI/Input';
import Button from '../Button/Button';
import { currencyFormatter } from '../../util/formatting';
import { useContext } from 'react';
import UserProgressContext from '../../store/UserProgressContext';
import useHttp from '../../hooks/useHttp';
import Error from '../Error/Error';
import './checkout.css';

const requestConfig = {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp('http://localhost:3000/orders', requestConfig);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries()); // {email: test@123.com}

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  let actions = (
    <>
      <Button type='button' textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === 'checkout'}
        onClose={handleFinish}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className='modal-actions'>
          <Button onClick={handleFinish}>Okay.</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label='Full name' type='text' id='name' />
        <Input label='E-mail address' type='email' id='email' />
        <Input label='Street' type='text' id='street' />
        <div className='control-row'>
          <Input label='Postal Code' type='text' id='postal-code' />
          <Input label='City' type='text' id='city' />
        </div>

        {error && <Error title='Failed to submit order' message={error} />}

        <p className='checkout-actions'>{actions}</p>
      </form>
    </Modal>
  );
}
