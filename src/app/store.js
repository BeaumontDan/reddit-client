// Import Redux Tools
import { configureStore } from "@reduxjs/toolkit";

// Import Reducers
import redditReducer from '../components/newsFeed/redditSlice';
import subredditReducer from '../components/subReddits/subredditSlice';

export const store = configureStore({
     reducer: {
        reddit: redditReducer,
        subreddit: subredditReducer
    }
});