

import React, { useContext, createContext } from 'react';

// Create a Context with a default value
const ThemeContext = createContext('light');

// Component that consumes the context
const ThemedComponent = () => {
  const theme = useContext(ThemeContext);
  return <div>The current theme is {theme}</div>;
};

// App component providing the context value
const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
};

export default App;