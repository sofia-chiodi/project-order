import Button from '../Button/Button';

const ProductCard = ({ imgName, title, price, description }) => {
  return (
    <div>
      <img src={imgName}></img>
      <h2>{title}</h2>
      <p>$ {price}</p>
      <p>{description}</p>
      <Button label='Add to Cart' />
    </div>
  );
};

export default ProductCard;
