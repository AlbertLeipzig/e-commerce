import { useParams } from 'react-router-dom';
import productsData from '../localData/productsData.json';

export const SingleProductPage = () => {
  const { productId } = useParams();
  const product = productsData.find((product) => product.id === Number(productId));
  return (
    <div className="single-product-page">
      <h1>{product.name}</h1>
      <p>Price : {product.price}</p>
      <p>Brand : {product.brand}</p>
    </div>
  );
};
