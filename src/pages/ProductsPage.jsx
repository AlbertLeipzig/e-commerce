import productsData from '../localData/productsData.json';
import { SingleProductCard } from '../components/SingleProductCard';
/* {"id":2,"name":"Dasheen","price":58,"brand":"Zoombox","quantity":"03728"}, */

/* const handlePagination = (page) => {

} */

export const ProductsPage = () => {
  return (
    <div className="products-page">
      <h1>Products Page</h1>
      <ul>
        {productsData.slice(100, 120).map((product) => (
          <SingleProductCard product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};
