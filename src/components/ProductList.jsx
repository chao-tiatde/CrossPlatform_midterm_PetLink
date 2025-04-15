import ProductItem from './ProductItem';

function ProductList({ products, start, end }) {
  return (
    <div className='w-full flex justify-center items-center'>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 card_list">
      {products.slice(start, end).map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
}

export default ProductList;
