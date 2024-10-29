import Button from '../Button/Button';
import './mealItem.css';
import { currencyFormatter } from '../../util/formatting';

const MealItem = ({ meal }) => {
  return (
    <li className='meal-container'>
      <article className='meal-card'>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <h3>{meal.name}</h3>
        <p className='meal-price'>{currencyFormatter.format(meal.price)}</p>
        <p className='meal-description'>{meal.description}</p>
        <Button label='Add to Cart' />
      </article>
    </li>
  );
};

export default MealItem;
