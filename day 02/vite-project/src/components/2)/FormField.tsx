import { motion } from "framer-motion";

interface formFieldProps {
  field: {
    label: string;
    type: 'text' | 'number' | 'password' | 'textarea' | 'date' | 'file';
    value: string;
  };
  index: number;
  onUpdate: (
    index: number,
    updateField: {
      label: string;
      type: 'text' | 'number' | 'password' | 'textarea' | 'date' | 'file';
      value: string;
    }
  ) => void;
  onRemove: (index: number) => void;
}

const FormField: React.FC<formFieldProps> = ({field, index, onUpdate, onRemove}) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onUpdate(index, {...field, value: e.target.value})
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const fileNames = files ? Array.from(files).map(file => file.name).join(', ') : "";
    onUpdate(index, { ...field, value: fileNames });
  };

  
  
  return (
    <div className="mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
      <label htmlFor="" className="block mb-2 text-lg font-medium text-gray-700">{field.label}</label>
    
      {field.type === 'textarea' ? (
        <textarea
          value={field.value}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : field.type === 'file' ? (
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <input
          type={field.type}
          value={field.value}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      <motion.button
        drag
        dragConstraints={{
          left: -20,
          right: 20,
          top: -20,
          bottom: 20
        }}
        type="button"
        onClick={() => onRemove(index)}
        className="mt-2 bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 duration-200"
      >Remove</motion.button>

    </div>
  );
}

export default FormField