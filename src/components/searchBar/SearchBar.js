// Import React Tools
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// Import StyleSheet
import styles from './SearchBar.module.css';
import { FaMagnifyingGlass } from "react-icons/fa6";

import { changeSearchTerm } from '../../store/redditSlice';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    // Handle input change and update the search term.
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    // Handle form submission and call the provided handleSubmit function with the search term.
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(changeSearchTerm(inputValue.trim()));
        setInputValue('');
    }
    
    // Render the SearchBar component.  The input field and submit button are styled using CSS modules.
    return (
        <form className='form' onSubmit={handleSubmit}>
            <button className={styles.searchBtn} data-testid='searchBtn' type='submit'><FaMagnifyingGlass /></button>
            <input 
                id='search'
                name='search'
                type='text'
                value={inputValue}
                onChange={handleChange}
                placeholder='Search...'
            />
        </form>
    );
}

export default SearchBar;