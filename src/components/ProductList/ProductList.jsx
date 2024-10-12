import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/meals')
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setMeals(resData);
      });
  }, []);

  console.log(meals);

  response.return(
    <div>
      <ProductCard
        imgName='1'
        title='Ramen'
        price='5'
        description='Ichiraku Ramen'
      />
    </div>
  );
};

export default ProductList;
