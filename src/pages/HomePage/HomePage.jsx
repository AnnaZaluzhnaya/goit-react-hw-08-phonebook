import React from 'react';
import style from 'pages/HomePage/HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <h1 className={style.homeTitle}>
        Welcome to our website. <br /> Create your phonebook and manage it
        effectively!
      </h1>
    </div>
  );
};

export default HomePage;
