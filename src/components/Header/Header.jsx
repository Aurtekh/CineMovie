import React from 'react';
import styles from './Header.module.scss';
import Search from '../Search/Search';

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.containerPopup}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
        <h1 className={styles.h1}>
          Cine &{' '}
          <span className={styles.h1} style={{ color: 'gold' }}>
            Movie
          </span>
        </h1>
      </div>
      <Search />
      <div className={styles.btnLogin}>Войти</div>
    </div>
  );
};

export default Header;
