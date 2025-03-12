// Import React Tools
import React from 'react';

// Import StyleSheet
import styles from './Header.module.css';

import SearchBar from '../searchBar/SearchBar';

const Header = () => {

    return (
        <header className='header'>
            <div className={styles.headerContent}>
            <img className={styles.logo} src='redddit_lite_logo.png' alt='redditlite' />
            <SearchBar />
            </div>
        </header>
    );

};

export default Header;