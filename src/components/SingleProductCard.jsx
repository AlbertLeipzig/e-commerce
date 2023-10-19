import { Link } from 'react-router-dom';

export const SingleProductCard = ({ product }) => {
  return (
    <li className="single-product-card">
      <Link to={`/products/${product.id}`}>
        <h2>{product.name}</h2>
        <p>price : {product.price}</p>
        <p>brand : {product.brand}</p>
      </Link>
    </li>
  );
};
