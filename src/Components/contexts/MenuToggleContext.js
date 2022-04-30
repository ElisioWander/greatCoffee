import { createContext, useContext, useState } from "react";

const MenuToggleContext = createContext({})

export function MenuToggleProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState(false);

  function handleToggleActiveMenu() {
    const isActive = !activeMenu;

    setActiveMenu(isActive);
  }
  
  return (
    <MenuToggleContext.Provider value={{handleToggleActiveMenu, activeMenu}} >
      {children}
    </MenuToggleContext.Provider>
  )
}

export const useMenuToggle = () => useContext(MenuToggleContext)