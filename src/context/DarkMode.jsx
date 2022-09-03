import { createContext, useState } from 'react';

const IsDarked = createContext(true);

const DarkMode = ({ children }) => {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? ('bg-slate-700') : ('bg-slate-100')}>
      <IsDarked.Provider
        value={{
          darkMode,
          setDarkMode
        }}>
        {children}
      </IsDarked.Provider>
    </div>
  )
}

export { IsDarked }
export default DarkMode;