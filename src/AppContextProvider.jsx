import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useGlobalContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [searchItem, setSearchItem] = useState('');

  return <AppContext.Provider value={{ searchItem, setSearchItem }}>
    {children}
  </AppContext.Provider>
}
export default AppContextProvider;