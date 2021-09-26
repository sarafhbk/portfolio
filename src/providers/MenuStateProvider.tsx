import React, { createContext, ReactNode, useMemo, useState } from "react";

interface MenuStateContextProps {
  openMenu: boolean;
  setOpenMenu: (val: boolean) => void;
}

export const MenuStateContext = createContext({} as MenuStateContextProps);

function MenuStateProvider({ children }: { children: ReactNode }) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const value = useMemo(
    () => ({
      openMenu,
      setOpenMenu,
    }),
    [openMenu, setOpenMenu]
  );
  return (
    <MenuStateContext.Provider value={value}>
      {children}
    </MenuStateContext.Provider>
  );
}

export default MenuStateProvider;
