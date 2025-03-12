// Import React Tools
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import StyleSheet
import styles from './SubReddits.module.css';
import { FaReddit } from "react-icons/fa";

// Import Components
import { getSubtopics } from "../../store/subredditSlice";
import { changeSubreddit } from "../../store/redditSlice";


const Subreddits = () => {
    const dispatch = useDispatch();

    const subreddit = useSelector((state) => state.subreddit);
    const { subtopics, isLoading, hasError } = subreddit;

    useEffect(() => {
        dispatch(getSubtopics());
    }, [dispatch]);

    const onClickTopic = (url) => {
        dispatch(changeSubreddit(url));
    }

    const displaySubreddit = () => {
        if (isLoading) {
            return <p>Loading...</p>
        } else if (hasError) {
            return <p>Error</p>
        } else if (subtopics.length > 0) {
            return (
                <div className={styles.subtopics}>
                    <h3>Subreddits</h3>
                    <ul className={styles.subredditList}>
                        {subtopics.map((sub) => (
                            <li
                                onClick={() => onClickTopic(sub.url)}
                                className={styles.topic}
                                key={sub.id}
                            >
                                <div className={styles.imgTitle}>
                                    {sub.header_img != null ? <img src={sub.header_img} alt="" /> : <FaReddit className={styles.icon} />}
                                    <span>{sub.display_name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
    }

    return (
        <div className={styles.subreddits}>
            {displaySubreddit()}
        </div>
    )
};

export default Subreddits;