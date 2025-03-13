// Import React Tools
import { Routes, Route } from 'react-router-dom';

// Import StyleSheets
import './App.css';

// Import Components
import { Subreddit } from '../components/Subreddit/Subreddit';
import { Post } from '../components/Post/Post';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { SubredditMenu } from '../components/SubredditMenu/SubredditMenu';
import { SearchResults } from '../components/SearchResults/SearchResults';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main>
        <SubredditMenu />

        <div className='posts'>
          <Routes >
            <Route path='/' element={<Subreddit />} />
            <Route path='/search' element={<SearchResults />} />
            <Route path='/:subreddit' element={<Subreddit />} />
            <Route path='/:subreddit/:postId' element={<Post />} />
          </Routes>
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;
