import './App.css';
import { motion } from 'framer-motion';
import { useStore } from './store';
import { useEffect } from 'react';

function App() {
  const {meals, searchQuery, setMeals, setSearchQuery} = useStore();

  useEffect(() => {
    const fetchMeals = async () => {
      try{
        const res =await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
        const data = await res.json();
        setMeals(data.meals);
      } catch (error) {
        console.error("error:", error);
      }
    }

    fetchMeals();
  }, [setMeals]);


  const filteredMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase()));

  let n = "SeaFood Recipes".split("");
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100'>

        <div className='flex gap-1'>
          {n.map((el, i) => (
            <motion.p 
              key={i}
              animate={{ x: [0, 10, 10, 5, 0], y: [0, -20, -10, -5, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat:Infinity,
                repeatDelay: 2
              }}
              className='text-4xl font-bold mb-8 text-teal-600'
              style={{ color: (i === 14 || i === 13 || i === 12 || i === 11 || i === 10) ? 'sandybrown' : '#007a96' }}
            >{el}</motion.p>
          ))}
        </div>


        <motion.input 
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
          type="text"
          placeholder='search for meals...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='border-2 border-teal-400 rounded-lg p-3 mb-8 w-96 text-center focus:outline-none focus:ring-2 focus:ring-teal-500'
        />


        <div>
          { filteredMeals.length > 0 ? (
            filteredMeals.map(meal => (
              <motion.div 
                whileHover={{scale: 1.05, boxShadow: '4px 4px 10px black'}}
                transition={{type:"spring", stiffness: 100}}
                key={meal.idMeal}
                className='bg-white border-2 border-blue-300 shadow-md rounded-2xl p-4 flex flex-col items-center'
              >

                <h2 className='text-xl font-semibold text-teal-700 mb-2'
                >{meal.strMeal}</h2>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className='w-full h-48 object-cover rounded-t-lg mb-4'
                />

              </motion.div>
            ))
          ) : (
            <p>No meals found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App
