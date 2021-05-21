import { createContext } from "react";
import { useState } from "react";

export const PayloadContext = createContext();

function PayloadContextProvider({ children }) {
  //  const [state, dispatch] = useReducer(reducer, initialState, init)
  const [payload, setPayload] = useState({});
  console.log(payload);

  return (
    <PayloadContext.Provider value={{ payload, setPayload }}>
      {children}
    </PayloadContext.Provider>
  );
}
export default PayloadContextProvider;
