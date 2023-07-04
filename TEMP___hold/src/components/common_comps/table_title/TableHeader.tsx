import * as React from 'react';
import styles from './tableheader.module.css';

const TableHeader = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};
