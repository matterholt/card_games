import React from 'react';
import styles from './table_header.module.css';

const TableHeader = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <header className={styles.table_header}>
      <h2>{title}</h2>
      {children}
    </header>
  );
};

export default TableHeader;
