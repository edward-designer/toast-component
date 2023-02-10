import React from "react";

const useEscapeKey = (callback) => {
  React.useEffect(() => {
    window.addEventListener("keydown", callback);
    return () => window.removeEventListener("keydown", callback);
  }, [callback]);
};

export default useEscapeKey;
