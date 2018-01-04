import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';

console.log(styles)

ReactDOM.render((
  <div>
    <h1 className={styles.title}>Hello</h1>
    <p className={styles.paragraph}>world</p>
  </div>
), document.getElementById('root'));
