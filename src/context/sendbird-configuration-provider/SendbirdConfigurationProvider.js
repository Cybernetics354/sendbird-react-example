import { createContext, useContext } from "react";

const SendbirdConfigurationContext = createContext({});

export function useSendbirdConfigurationContext() {
  return useContext(SendbirdConfigurationContext);
}

export default function SendbirdConfigurationProvider({ children, configuration }) {
  return <SendbirdConfigurationContext.Provider value={configuration}>
    {children}
  </SendbirdConfigurationContext.Provider>
}