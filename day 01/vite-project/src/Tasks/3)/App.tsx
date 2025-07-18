import './App.css';
import usePasswordStore from './store';
import { motion } from 'framer-motion';

function App() {

  const{
    length,
    includeNumbers,
    includeSymbols,
    includeUppercase,
    includeLowercase,
    generatedPassword,
    setLength,
    toggleNumbers,
    toggleSymbols,
    toggleUppercase,
    toggleLowercase,
    generatePassword
  } = usePasswordStore();


  const handleGeneratePassword = () => generatePassword();
  

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
      <div className='p-8 w-[40rem] mx-auto bg-white shadow-lg rounded-lg'>
        
        <h1 className='text-2xl font-bold mb-4'>Password generator</h1>

        <div className='flex flex-col gap-4'>
          <label htmlFor="length" className='block text-sm font-medium text-gray-700'>Password Length</label>
          <motion.input
            whileHover={{rotate: [0, 1, 0, -1, 0]}}
            transition={{duration: 0.3, repeat: Infinity, ease: "linear"}}
            type="number" 
            name='length'
            value={length}
            onChange={e => setLength(Number(e.target.value))}
            min={4}
            max={64}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-900'
          />
        </div>

        <div className='flex items-center'>
          <motion.input
            whileHover={{scale: [1, 1.5, 1]}}
            transition={{repeat: Infinity}}
            type="checkbox"
            checked={includeNumbers}
            onChange={toggleNumbers}
          />
          <label className='ml-2 text-sm'>Include Numbers</label>
        </div>

        <div className='flex items-center'>
          <motion.input
            whileHover={{scale: [1, 1.5, 1]}}
            transition={{repeat: Infinity}}
            type="checkbox"
            checked={includeSymbols}
            onChange={toggleSymbols}
          />
          <label className='ml-2 text-sm'>Include Symbols</label>
        </div>

        <div className='flex items-center'>
          <motion.input
            whileHover={{scale: [1, 1.5, 1]}}
            transition={{repeat: Infinity}}
            type="checkbox"
            checked={includeLowercase}
            onChange={toggleLowercase}
          />
          <label className='ml-2 text-sm'>Include Lowercase</label>
        </div>

        <div className='flex items-center'>
          <motion.input
            whileHover={{scale: [1, 1.5, 1]}}
            transition={{repeat: Infinity}}
            type="checkbox"
            checked={includeUppercase}
            onChange={toggleUppercase}
          />
          <label className='ml-2 text-sm'>Include Uppercase</label>
        </div>

        <motion.button
          animate={{skewX: [0, 5, 0, -5, 0]}}
          transition={{repeat: Infinity, duration: 2}}
          onClick={handleGeneratePassword}
          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
        >Generate Password</motion.button>


        {generatedPassword && (
          <div className='mt-4 p-4 bg-gray-100 rounded-lg'>
            <p className='text-lg break-all'>{generatedPassword}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App