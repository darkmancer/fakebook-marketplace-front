import { createContext } from "react";
import { useState } from "react";
import React from "react";

export const AccountContext = createContext();
//res.data.payload
function AccountContextProvider({ children }) {
  const [open, setOpen] = React.useState(false);
  return (
    <AccountContext.Provider value={{ open, setOpen }}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountContextProvider;
