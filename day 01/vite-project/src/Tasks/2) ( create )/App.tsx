import { useState } from 'react';
import './App.css';
import { useStore } from './useStore';
import { motion, spring } from 'framer-motion';

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
}
 
function App() {
  const { recipes, addRecipe, removeRecipe } = useStore();
  const [name, setName] = useState<string>('');
  const [ingredients, setIngredients] = useState<string>('');
  const [ instructions, setInstructions] = useState<string>('');
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);


  const handleAddRecipe = () => {
    if(name.trim() === '' || ingredients.trim() === '' || instructions.trim() === ''){
      return;
    }

    addRecipe({
      id: Date.now(),
      name,
      ingredients: ingredients.split(",").map(ingredients => ingredients.trim()),
      instructions
    });

    setName('');
    setIngredients('');
    setInstructions('');

  }

  const handleEditRecipe = (recipe: Recipe) => {
    setEditingRecipe(recipe);
    setName(recipe.name);
    setIngredients(recipe.ingredients.join(', '));
    setInstructions(recipe.instructions);
  }

  const handleUpdateRecipe = () => {
    if(name.trim() === '' || ingredients.trim() === '' || instructions.trim() === ''){
      return;
    }


    if(editingRecipe){
      removeRecipe(editingRecipe.id);
      addRecipe({
        id: Date.now(),
        name,
        ingredients: ingredients.split(",").map(ingredients => ingredients.trim()),
        instructions
      });
      setEditingRecipe(null);
    }

    setName('');
    setIngredients('');
    setInstructions('');
  }

  const handleCancleEdit = () => {
    setEditingRecipe(null);

    setName('');
    setIngredients('');
    setInstructions('');
  }

  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-green-100'>
        <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl'>

          <motion.h1 
            animate={{
              scaleX: [1, -1, -1, 1, 1],
              scaleY: [1, 1, -1, -1, 1]
            }}
            transition={{duration: 3, delay: 1}}
            className='text-3xl font-bold mb-6 text-center text-green-800'>Recipe Book</motion.h1>

          <div className='space-y-4 mb-6'>
            <motion.input
              whileHover={{rotate: 1}}
              whileTap={{scale: 0.95}}
              transition={{type: "spring", stiffness: 300}}
              type="text"
              name="name"
              id=""
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='Recipe Name'
              className='w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
            />
            <motion.input
              whileHover={{rotate: 1}}
              whileTap={{scale: 0.95}}
              transition={{type: "spring", stiffness: 300}}
              type="text"
              name="ingredients"
              id=""
              value={ingredients}
              onChange={e => setIngredients(e.target.value)}
              placeholder='ingredients'
              className='w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
            />
            <motion.textarea
              whileHover={{rotate: 1}}
              whileTap={{scale: 0.95}}
              transition={{type: "spring", stiffness: 300}}
              name="instructions"
              id=""
              value={instructions}
              onChange={e => setInstructions(e.target.value)}
              placeholder='instructions'
              className='w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
            />

            <div className='flex justify-center'>
              {editingRecipe ? (
                <div className='flex gap-16'>
                  <motion.button 
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.9}}
                    onClick={handleUpdateRecipe}
                    className='bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-black'
                  >Update Recipe</motion.button>

                  <motion.button 
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.9}}
                    onClick={handleCancleEdit}
                    className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-black'
                  >Cancel</motion.button>

                </div>
              ): (
                <>
                  <motion.button 
                    whileHover={{skewX: 5}}
                    whileTap={{skewX: -5}}
                    transition={{type: "spring", stiffness: 300}}
                    onClick={handleAddRecipe}
                    className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-black'
                  >Add Recipe</motion.button>
                </>
              )}
            </div>

          </div>

          <ul className='space-y-4'>
            {recipes.map((recipe) => (
              <li key={recipe.id} className='p-4 bg-green-50 rounded-lg shadow-sm'>
                <h2 className='text-xl font-semibold text-green-800 mb-2'>
                  {recipe.name}
                </h2>

                <p className='text-gray-700 mb-2'><strong>Ingredients: </strong>{recipe.ingredients.join(', ')}</p>

                <div className='flex justify-between'>
                  <motion.button 
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.9}}
                    onClick={() => handleEditRecipe(recipe)}
                    className='bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-black'
                  >Edit</motion.button>


                  <motion.button 
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.9}}
                    onClick={() => removeRecipe(recipe.id)}
                    className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-black'
                  >Delete</motion.button>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </>
  );
}

export default App