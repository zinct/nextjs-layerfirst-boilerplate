const { createContext, useEffect, useState } = require("react");
import { toast } from "react-toastify";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [error, setError] = useState({});

  return <AppContext.Provider value={{ error, setError }}>{children}</AppContext.Provider>;
};

export default AppContext;
