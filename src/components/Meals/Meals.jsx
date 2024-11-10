import MealItem from '../MealItem/MealItem';
import useHttp from '../../hooks/useHttp';
import Error from '../Error/Error';
import './meals.css';

const requestConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p>Fetching meals...</p>;
  }

  if (error) {
    return <Error title='Failed to fetch meals' message={error} />;
  }

  return (
    <div>
      <ul id='meals'>
        {loadedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </div>
  );
};

export default Meals;
