import { useState, type ChangeEvent } from 'react';
import './App.css';
import useFormStore from './store';
import { motion } from 'framer-motion';
import FormField from './FormField';

interface NewField {
  label: string;
  type: 'text' | 'number' | 'password' | 'textarea' | 'date' | 'file';
  value: string;
}

function App() {
  const {formFields, addField, removeField, updateField, resetForm} = useFormStore();

  const [newField, setNewField] = useState<NewField>({
    label: "",
    type: "text",
    value: ""
  });

  const handleAddField = () => {
    addField(newField)
    setNewField({ label: '', type: 'text', value: ''});
  }

  const handleFieldChange = (e : ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setNewField((prev) => ({...prev, [name]: value}));
  }

  const handleFieldUpdate = (index: number, updatedField: NewField) => updateField(index, updatedField);

  const handleFieldRemove = (index: number) => removeField(index);

  return (
    <>
      <div className='max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Form Builder</h1>
        <div className='flex flex-col mb-6'>
          <input 
            type="text"
            name='label'
            placeholder='Field label'
            value={newField.label}
            onChange={handleFieldChange}
            className='p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />

          <select
            name="type"
            value={newField.type}
            onChange={handleFieldChange}
            className='p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="text">text</option>
            <option value="number">number</option>
            <option value="textarea">textarea</option>
            <option value="date">date</option>
            <option value="file">file</option>
          </select>

          <div className='flex justify-between'>
            <motion.button
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              transition={{type: "spring", stiffness: 300}}
              type='button' 
              onClick={handleAddField}
              className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'
            >Add Field</motion.button>

            <motion.button
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
              transition={{type: "spring", stiffness: 300}}
              type='button'
              onClick={resetForm}
              className='bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600'
            >Reset Form</motion.button>


          </div>
        </div>

        <form>
          {formFields.map((field, index) => (
            <FormField key={index} field={field} index={index} onUpdate={handleFieldUpdate} onRemove={handleFieldRemove} />
          ))}
        </form>

      </div>
    </>
  );
}

export default App
