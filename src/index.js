import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import i18next from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';

i18next
    .use(LngDetector)
    .init({
    fallbackLng: 'en',
    debug: true,
    detection: {
        order: ['navigator']
    },
    resources: {
      en: {
        translation: {
          "greet": "Hello"
        }
      },
      es: {
        translation: {
            "greet": "Hola"
          }
      },
      de: {
        translation: {
            "greet": "Hallo"
          }
      }
    }
  }, function(err, t) {
    // initialized and ready to go!
  });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
