import { currencyFormatter } from '../../util/formatting';

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li>
      <p>
        {name} - {quantity} * {currencyFormatter.format(price)}
      </p>
      <p>
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
