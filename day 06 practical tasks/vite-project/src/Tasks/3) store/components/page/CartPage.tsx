import { motion } from 'framer-motion';
import { Cart } from '../store';

function CartPage() {
  const {products, deleteProduct} = Cart();


  return (
    <>
      <div className='flex p-12 gap-20 flex-wrap mt-8'>
        {products.map((el: any) => (
          <motion.div
            key={el.id}
            className='p-2 flex flex-col gap-2 border-2 rounded-lg w-60 h-80 bg-green-50'
            whileHover={{rotate: -3, scale: 1.05}}
          >

            <img src={el.image} alt={el.title} className='rounded-lg w-40 h-40'/>
            
            <div className='flex justify-around items-center gap-2'>
              <h2 className='text-sm font-semibold'>{el.title}</h2>
              <h3 className='text-green-500 font-semibold'>{el.price}$</h3>
            </div>

            <motion.button
              onClick={() => deleteProduct(el.id)}
              className='mt-auto rounded-lg text-white bg-red-500 hover:bg-red-600 w-30 h-8 border-2 border-black flex justify-center items-center gap-2'
              whileHover={{rotate: [0, 1, 0, -1, 0]}}
              transition={{repeat: Infinity, ease: "linear"}}
            >
              delete Product
            </motion.button>

          </motion.div>
        ))}
      </div>
    </>
  );
}

export default CartPage