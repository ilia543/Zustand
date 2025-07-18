import './App.css'
import { Counter } from './store'
import { FaMinus, FaPlus, FaRedo } from 'react-icons/fa';
import { motion } from 'framer-motion';

function App() {
  const {count, increase, decrease, reset} = Counter();

  return (
    <>
      <h1 className='text-8xl mt-4 ml-4'>{count}</h1>
      <div className='flex gap-2'>
        <motion.button
          className='border-2 text-white text-2xl border-black rounded-lg w-40 flex justify-center items-center gap-4 p-2'
          onClick={increase}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 1.2}}
          transition={{type: "spring", stiffness: 300}}
        >
          decrease <FaPlus/>
        </motion.button>

        <motion.button
          className='border-2 text-white text-2xl border-black rounded-lg w-40 flex justify-center items-center gap-4 p-2'
          onClick={decrease}
          whileHover={{scale: 0.9}}
          whileTap={{scale: 0.8}}
        >
          increase <FaMinus/>
        </motion.button>

        <motion.button
          className='border-2 text-white text-2xl border-black rounded-lg w-30 flex justify-center items-center gap-4 p-2'
          onClick={reset}
          whileHover={{rotate: 90}}
          whileTap={{rotate: 270}}
          transition={{ease: "linear", duration: 0.2}}
        >
          reset <FaRedo/>
        </motion.button>
      </div>
    </>
  )
}

export default App
