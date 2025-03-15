import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slices/productSlice';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  if (productStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (productStatus === 'failed') {
    return <div>Error loading products</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
