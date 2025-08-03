import { useContext } from 'react';
import { ProductContext } from './App';



 const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
const ProductList = () => {
  const { products, loading, refresh } = useProducts();

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
   <div className="p-4">
  <h1 className="text-xl font-medium mb-4">Product List</h1>

  <button onClick={refresh} className="mb-6 px-3 py-1 border text-sm">
    Reload Products
  </button>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
    {products.length > 0 ? (
      products.map(product => (
        <div key={product.id} className="p-3 border">
          <h2 className="text-base font-semibold">{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}/5</p>
        </div>
      ))
    ) : (
      <p className="col-span-full text-center text-sm">No products available</p>
    )}
  </div>
</div>

  );
};

export default ProductList;