import React from 'react';
import './Form.css';

const Form = ({setInputText, inputText, setSearchText}) => {
    const changeHandler = (e) => {
        setInputText(e.target.value);
    }

    const clickHandler = (e) => {
        e.preventDefault();
        setSearchText(inputText);
        setInputText('');
    }

    return(
        <div className='form-container'>
            <form>
                <input type='text' value={inputText} onChange={changeHandler} placeholder='Enter the keyword'/>
                <input type='submit' onClick={clickHandler} value='Search'/>
            </form>
        </div>
    )
}

export default Form;