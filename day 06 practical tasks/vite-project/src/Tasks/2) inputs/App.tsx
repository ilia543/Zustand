import './App.css';
import { Inputs } from './store';

function App() {
  const {inputs, newInput, setNewInput, addInput, removeInput} = Inputs();

  return (
    <>
       <div className='mt-4 ml-2 flex gap-2'>
        <input
          className='border-2 border-white p-0.5 font-bold rounded-lg'
          type="text"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
          placeholder='enter task'
        />
        <button
          onClick={addInput}
          className='border-4 border-blue-400 rounded-xl bg-green-600 p-1 w-32 font-bold text-white hover:bg-green-800'
        >add task</button>
       </div>

       <ul className='mt-8 ml-4 flex flex-col gap-2'>
        {inputs.map((el, i) => (
            <li className='flex gap-4 text-gray-100'>
              {el}
              <button
                onClick={() => removeInput(i)}
                className='bg-red-500 border-2 border-white rounded-xl p-1 w-20 hover:bg-red-700'
              >delete</button>
            </li>
        ))}
       </ul>
    </>
  )
}

export default App
