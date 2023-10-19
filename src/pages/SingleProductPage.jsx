import { useParams, Link } from 'react-router-dom';
import productsData from '../localData/productsData.json';

export const SingleProductPage = () => {
  const goBack = () => {
    window.history.back();
  };

  // UX

  const { productId } = useParams();
  const product = productsData.find(
    (product) => product.id === Number(productId)
  );
  return (
    <div className="single-product-page">
      <h1>{product.name}</h1>
      <p>Price : {product.price}</p>
      <p>Brand : {product.brand}</p>
      <button onClick={() => goBack()}>Go Back</button>
      <button>
        <Link to="/products">Products</Link>
      </button>
    </div>
  );
};
