import React, { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({dataPromise, handleRecievedProduct}) => {
    const products = use(dataPromise);
    console.log(products);
    return (
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-15'>
            {
                products.map((product) => <ProductCard product={product} key={product.id} handleRecievedProduct={handleRecievedProduct}></ProductCard>)
            }
        </div>
    );
};

export default Products;