import {React , useState}from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
      if(categories.includes(newCategory)) return;
      const newArray = [newCategory, ...categories];
      setCategories(newArray); 
      //otra forma seria obtener el resultado del callback de setCateroies
      //setCategories( elements => ['Dragon Ball', ...elements]); 
  }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory onAddCategory = { onAddCategory }/>
        
        {/* Listado de gifs */}
        { 
          /* Gif Items */
          categories.map( (category) => (
            <GifGrid key={category} category={category}/>
          ))
        }  
        
    </>
  )
}
