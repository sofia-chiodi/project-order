import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import Checkout from './components/checkout/Checkout';
import { CartContextProvider } from './store/CartContext';
import { UserProgressContextProvider } from './store/UserProgressContext';

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
