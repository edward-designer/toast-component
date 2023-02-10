import React from "react";

import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastData, setToastData] = React.useState([]);

  const addToast = React.useCallback((message, variant) => {
    setToastData((currentToastData) => [
      ...currentToastData,
      {
        message,
        variant,
        id: crypto.randomUUID(),
        dismissed: false,
      },
    ]);
  }, []);

  const dismissToast = React.useCallback((idToDismiss) => {
    setToastData((currentToastData) => {
      const indexToDismiss = currentToastData.findIndex(
        ({ id }) => id === idToDismiss
      );
      const newToastData = [...currentToastData];
      newToastData[indexToDismiss] = {
        ...currentToastData[indexToDismiss],
        dismissed: true,
      };
      return newToastData;
    });
  }, []);

  useEscapeKey((e) => {
    if (e.key === "Escape") {
      toastData.forEach(({ id }) => dismissToast(id));
    }
  });

  return (
    <ToastContext.Provider value={{ toastData, addToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
