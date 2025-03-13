// Import React Tools
import React from 'react';

// Import StyleSheets
import './Footer.css';

export const Footer = () => {

  return (
    <div className='footer'>
      <p>
        <a className='footerLink' href="https://codecademy.com" title="Codecademy Homepage">Codecademy</a> project by <a className='footerLink' href="https://github.com/BeaumontDan" title="GitHub Profile">Dan Beaumont</a>: <a className='footerLink' href="https://github.com/BeaumontDan/reddit-client" title="Code Solution">Reddit Minimal Client</a> 
      </p>
    </div>
  );

};