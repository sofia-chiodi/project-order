import { useState, useEffect } from 'react';
import MealItem from '../MealItem/MealItem';
import './meals.css';

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch('http://localhost:3000/meals');

      if (!response.ok) {
        // ...
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }

    fetchMeals();
  }, []);

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
