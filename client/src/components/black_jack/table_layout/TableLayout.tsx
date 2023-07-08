import React from "react";
import style from "./table_layout.module.css";

const TableLayout = ({ children }: { children?: React.ReactNode }) => {
  return <div className={style.tableLayoutBlackjack}>{children}</div>;
};

export default TableLayout;
