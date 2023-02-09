import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastData = [] }) {
  return (
    <ol className={styles.wrapper}>
      {toastData.map(({ message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant}>{message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
