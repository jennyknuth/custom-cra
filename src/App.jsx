import React from 'react';
import logo from './logo.svg';
import styles from './App.scss';

const App = () => (
  <div className={styles.app}>
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt={logo} />
    </header>
    <h1 className={styles.title}>Tokens</h1>
    <hr />
    <p className={styles.intro}>
      To get started, edit <code>src/App/App.jsx</code> and save to reload.
    </p>
  </div>
);

export default App;
