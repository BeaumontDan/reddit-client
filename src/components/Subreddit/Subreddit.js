// Import React Tools
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSubredditPosts } from '../../api/reddit';

// Import StyleSheets
import './Subreddit.css';

// Import Components
import { Card } from '../Card/Card';

export const Subreddit = () => {
    let { subreddit } = useParams();
    subreddit ||= 'popular';
    let showSubreddit = subreddit === 'popular';
    let [subredditPosts, setSubredditPosts] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState(false);
    
    useEffect(() => {
        fetchSubredditPosts(subreddit)
            .then(response => {
                setSubredditPosts(response);
                setIsLoading(false);
            })
            .catch(() => {
                setError(true);
            })
    }, [subreddit, error]);
    return (
        error ? <p className='error'>Cannot load the posts. Try to check your internet connection or change the url and reload the page.</p> :
            <div data-testid='subredditPosts' className='subredditPosts'> 
                {isLoading ? <span className='loading'>Loading...</span> :
                    subredditPosts.map(post => {
                        return <Card key={post.id} post={post} showSubreddit={showSubreddit}/>
                    })}
            </div>
    );
}