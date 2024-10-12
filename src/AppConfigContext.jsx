// AppConfigContext.jsx
import React, { createContext } from 'react';

// Create context to hold all configuration values
export const AppConfigContext = createContext(null);

const AppConfigProvider = ({ children }) => {
  const config = {
    app_name: "LLM Dev AI"
  };

  return (
    <AppConfigContext.Provider value={config}>
      {children}
    </AppConfigContext.Provider>
  );
};

export default AppConfigProvider;
