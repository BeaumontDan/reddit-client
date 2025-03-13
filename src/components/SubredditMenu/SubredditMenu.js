// Import React Tools
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Import StyleSheets
import './SubredditMenu.css';
import { FaReddit } from "react-icons/fa";

// Import Components
import { fetchSubreddits } from './SubredditsSlice';

export const SubredditMenu = () => {
    const subreddits = useSelector(state => state.subreddits.subreddits);
    const isLoading = useSelector(state => state.subreddits.isLoading);
    const error = useSelector(state => state.subreddits.error);
    const dispatch = useDispatch();
    const [openedMenu, setOpenedMenu] = useState(false);
    const toggleMenu = () => {
        setOpenedMenu(!openedMenu);
    }
    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    return (
        isLoading || error ||
        <div data-testid='subreddit-menu' className='subredditMenu'>
            <nav className='subredditLinks'>
                <h3>subreddits</h3>
                {subreddits.map(subreddit => {
                    return <NavLink className='navLink' onClick={toggleMenu} to={`/${subreddit.display_name}`} key={subreddit.id}>
                        {subreddit.icon_img ?
                            <img className='subredditIcon' src={subreddit.icon_img} alt='Avatar' /> :
                            <div className='subredditIcon'><FaReddit className='subredditIcon' /></div>}
                        <span data-testid='subreddit-name' className='subredditName'>{subreddit.display_name}</span>
                    </NavLink>
                })}
            </nav>
        </div>
    )
}