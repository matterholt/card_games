import React from 'react';
import styles from './link.module.css';

// if no link provided then have a different layout

const Link = ({ title, link }: { title: string; link: string }) => {
  if (!link) {
    return (
      <div className={[styles.link_container, styles.inactive].join(' ')}>
        <p className={styles.title}>{title}</p>
        <p className={styles.comming_soon}>comming soon</p>
      </div>
    );
  }

  return (
    <div className={styles.link_container}>
      <a className={styles.link} href={link}>
        <span className={styles.title}>{title}</span>
      </a>
    </div>
  );
};

export default Link;
