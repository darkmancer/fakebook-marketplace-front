import { createContext } from "react";
import { useState } from "react";
import { io } from "socket.io-client";

export const socket = io("http://localhost:8001/");
export const SocketContext = createContext();

function SocketContextProvider({ children }) {
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}
export default SocketContextProvider;
