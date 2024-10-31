import { useContext } from 'react';

import './mealItem.css';
import Button from '../Button/Button';
import { currencyFormatter } from '../../util/formatting';
import CartContext from '../../store/CartContext';

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className='meal-container'>
      <article className='meal-card'>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <h3>{meal.name}</h3>
        <p className='meal-price'>{currencyFormatter.format(meal.price)}</p>
        <p className='meal-description'>{meal.description}</p>
        <Button onClick={handleAddMealToCart}>Add to Cart</Button>
      </article>
    </li>
  );
};

export default MealItem;
