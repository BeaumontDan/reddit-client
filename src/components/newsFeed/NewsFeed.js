// Import React Tools
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// Import StyleSheets
import styles from './NewsFeed.module.css'

// Import Components
import Card from '../card/Card';
import { startGetAllPosts, selectAllPostFilter } from "./redditSlice";

const NewsFeed = () => {
    const dispatch = useDispatch();

    const reddit = useSelector((state) => state.reddit);
    const { selectedSubreddit, isLoading } = reddit;
    const allPostsFilter = useSelector(selectAllPostFilter);

    useEffect(() => {
        dispatch(startGetAllPosts(selectedSubreddit));
    }, [selectedSubreddit, dispatch]);

    return (
        <div className={styles.newsFeed}>
            {
                isLoading ? <p>Loading...</p> : allPostsFilter.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                ))
            }
        </div>
    );
};

export default NewsFeed;