import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toastData, dismissToast } = React.useContext(ToastContext);
  const visibleToast = toastData.filter((toast) => !toast.dismissed);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {visibleToast.map(({ message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} dismissThisToast={() => dismissToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
