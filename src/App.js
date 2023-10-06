import Products from './Products';
import { useEffect, useState } from 'react';
import './App.css';
import image from "./icon.png";
import "animate.css";

function App() {
  const myId ="9451176e";
  const myKey = "007b99ea9f428c0c0b8fa25437c7ed8a";
  const [mySearch, setMySearch] = useState("");
  const[chooseRecipe, setChooseRecipe] = useState([]);
  const [word, setWord] = useState("mango");

  useEffect(() => {
      const getRecipe = async() => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${word}&app_id=${myId}&app_key=${myKey}`);
      const data = await response.json();
      setChooseRecipe(data.hits);
  }
    getRecipe()
  }, [word])
  const findRecipe = (e) => {
    setMySearch(e.target.value)
  }
  const anyChosen = (e) => {
    e.preventDefault()
    setWord(mySearch)
  }

  return (
    <div className="App">
      <div className='container'>
      <img className = "cook animate__animated animate__delay-2s animate__bounce animate__slower" src = "https://img.icons8.com/?size=512&id=HQDkCiRRjzew&format=png" alt ="pic"/>
      <h1 className='animate__animated animate__bounce animate__slower 5s'>Choose your recipe</h1>
      </div>
      <div className='container'>
        <form onSubmit={anyChosen}>
        <input className='search' placeholder = "Choose your recipe..."onChange={findRecipe} value={mySearch} /> 
        <button>
        <img src ={image} alt ="icon"/>
        </button>
      </form>
    </div>
    {chooseRecipe.map((element, index) => (
    <Products key = {index}
    label = {element.recipe.label} 
    image ={element.recipe.image} 
    calories={element.recipe.calories} 
    ingredients = {element.recipe.ingredientLines}
    mealType = {element.recipe.mealType}
    totalTime = {element.recipe.totalTime}
    source = {element.recipe.source}/>
      ))}

    </div>
  );
}

export default App;
