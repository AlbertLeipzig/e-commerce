export const SingleProductCard = ({ product }) => {
  return (
    <li className="single-product-card">
      <h2>{product.name}</h2>
      <p>price : {product.price}</p>
      <p>brand : {product.brand}</p>
    </li>
  );
};
