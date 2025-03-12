// Import React Tools
import React from 'react';

// Import StyleSheets
import styles from './App.module.css';

// Import Components
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SubReddits from '../components/subReddits/SubReddits';
import NewsFeed from '../components/newsFeed/NewsFeed';

const App = () => {

  return (
    <div className={styles.app}>
      <Header />
        <div className={styles.main}>
          <SubReddits />
          <NewsFeed />
        </div>

      <Footer />
    </div>
  );
}

export default App;
