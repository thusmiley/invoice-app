import React from "react";
import { ScreenType } from "../../pages";
import styles from "./PlusButton.module.scss";

interface PlusButtonProps {
  screenType: ScreenType;
}

export const PlusButton: React.FC<PlusButtonProps> = ({ screenType }) => {
  return (
    <button className={styles.root}>
      <span>
        <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
            fill="#7C5DFA"
            fillRule="nonzero"
          />
        </svg>
      </span>
      {screenType === "phone" ? "New" : "New Invoice"}
    </button>
  );
};
