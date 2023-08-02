import React from "react";
import style from "./table_layout.module.css";
import { joinCssClass } from "@/helpers/cssHelpers";

const TableLayout = ({
  layoutStyle,
  children,
}: {
  layoutStyle: string;
  children?: React.ReactNode;
}) => {
  const layout =
    layoutStyle == "justDealer" ? "tableSingleColumn" : "tableGridLayout";
  return (
    <div className={joinCssClass([style.tableSizeBlackjack, layout])}>
      {children}
    </div>
  );
};

export default TableLayout;
