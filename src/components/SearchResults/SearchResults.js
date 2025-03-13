// Import React Tools
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Import StyleSheets
import './SearchResults.css';

// Import Components
import { Card } from '../Card/Card';
import { fetchResults } from '../Header/SearchSlice';

export const SearchResults = () => {
    let results = useSelector(state => state.search.results);
    let [searchParams] = useSearchParams();
    let term = searchParams.get('q');
    let isLoading = useSelector(state => state.search.isLoading);
    let error = useSelector(state => state.search.error);
    let dispatch = useDispatch();
    useEffect(() => {
       dispatch(fetchResults(term));
    }, [dispatch, term, error]);
    return (
        error ? <p className='error'>Oops! We can't find what you're looking for...</p> :
        <div className='subreddits'>
                {isLoading ? <span className='loading'>Loading...</span> :
                results.map(post => {
                        return <Card key={post.id} post={post} showSubreddit={true}/>
                    })}
        </div>
    )
};