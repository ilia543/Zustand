import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { Cart } from './store';

function Shop() {
  const {addProduct} = Cart();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }

    fetchProducts()
  }, []);


  return (
    <>
      <div className='flex p-12 gap-20 flex-wrap mt-8'>
        {products.map((el: any) => (
          <motion.div
            key={el.id}
            className='p-2 flex flex-col gap-2 border-2 rounded-lg w-60 h-80 bg-green-50'
            whileHover={{rotate: 3, scale: 1.05}}
          >

            <img src={el.image} alt={el.title} className='rounded-lg w-40 h-40'/>
            
            <div className='flex justify-around items-center gap-2'>
              <h2 className='text-sm font-semibold'>{el.title}</h2>
              <h3 className='text-green-500 font-semibold'>{el.price}$</h3>
            </div>

            <motion.button
            onClick={() => addProduct(el.id, el.title, el.image, el.price)}
              className='mt-auto rounded-lg bg-green-400 hover:bg-green-600 w-30 h-8 border-2 border-green-700 hover:border-green-950 flex justify-center items-center gap-2'
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
            >
              add to cart <FiShoppingBag />
            </motion.button>

          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Shop