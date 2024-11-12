import React, { createContext, useContext } from "react";


const SkeletonThemeContext = createContext();


export const useSkeletonTheme = () => useContext(SkeletonThemeContext);


const SkeletonThemeProvider = ({ theme, children }) => {
  const skeletonTheme = theme === "light"

  ?    { color: "#c0c0c0", highlightColor: "#e0e0e0" }
  : {   color:  '#2b3844', highlightColor: "#3c4a56"   };
    
  return (
    <SkeletonThemeContext.Provider value={skeletonTheme}>
      {children}
    </SkeletonThemeContext.Provider>
  );
};

export default SkeletonThemeProvider;