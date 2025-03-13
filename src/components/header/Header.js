// Import React Tools
import { Link, useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Import StyleSheets
import './Header.css';
import { FaMagnifyingGlass } from "react-icons/fa6";

// Import Components
import { setTerm, clearTerm } from './SearchSlice';

export const Header = () => {
    let term = useSelector(state => state.search.term);
    let dispatch = useDispatch();
    let location = useLocation();
    let navigate = useNavigate();

        // Handle input change and update the search term.
    const handleTermChange = e => dispatch(setTerm(e.target.value));

    let goToResults = (e) => {
        e.preventDefault();
        navigate({
            pathname: 'search',
            search: `?${createSearchParams({
                q: term
            })}`
        });
    }
    useEffect(() => {
        if (location.pathname !== '/search') {
            dispatch(clearTerm());
        }
    }, [location, dispatch]);
    return (
        <header>
            <div className='headerContent'>
                <Link to='/'>
                    <img className='logo' src='/redddit_lite_logo.svg' alt='RedditLite Logo' />
                </Link>
                <form className='searchBar' onSubmit={goToResults}>
                    <button className='searchBtn' type='submit'><FaMagnifyingGlass /></button>
                    <input id='searchInput' value={term} type='search' placeholder='Search...' onChange={handleTermChange} />
                </form>
            </div>
        </header>
    );
}