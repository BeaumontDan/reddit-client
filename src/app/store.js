// Import React Tools
import { configureStore } from '@reduxjs/toolkit';

// Import Reducers
import subredditsReducer from '../components/SubredditMenu/SubredditsSlice';
import searchReducer from '../components/Header/SearchSlice';

export default configureStore({
    reducer: {
        subreddits: subredditsReducer,
        search: searchReducer
    }
});