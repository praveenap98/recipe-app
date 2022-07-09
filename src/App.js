import React, { useEffect, useState } from 'react';
import Form from './components/Form.js';
import Recipe from './components/Recipe.js';
import './App.css';

const App = () => {
    const API_APP_ID = 'fb0e5933';
    const API_APP_KEY = '8fe764f5896c4abce3f0c1dd59d6d6e5';
    const [inputText, setInputText] = useState('');
    const [searchText, setSearchText] = useState('chicken');
    const [recipes, setRecipes] = useState([]);
    const getRecipe = async() => {
        let response = await fetch(`https://api.edamam.com/search?q=${searchText}&app_id=${API_APP_ID}&app_key=${API_APP_KEY}`);
        response = await response.json();
        console.log(response.hits);
        setRecipes(response.hits);
    }

    useEffect(() => { getRecipe(); }, [searchText]);
    return(
        <div className='main-container'>
            <h2>Find the reeecipeee...!</h2>
            <Form setInputText={setInputText} inputText={inputText} setSearchText={setSearchText}/>
            <Recipe recipes={recipes}/>
        </div>
    )
}

export default App;

