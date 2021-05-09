import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategorias }) => {
    const [input, setInput] = useState('');
    const handleInputChangue = (e) => {

        setInput(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim().length > 2) {
            setCategorias(cats => {
                if (!cats.includes(input)) {
                    return [ input,...cats];
                } else {
                    return [...cats];
                }
            });
            setInput('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={handleInputChangue}
            />
        </form>


    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory
