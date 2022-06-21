import { React , useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event) => {
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        onAddCategory(inputValue.trim().toLowerCase());
        setinputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                id="input-category"
                name="input-category"
                type="text"
                placeholder="Looking for Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}