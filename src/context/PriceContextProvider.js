import { createContext } from "react";
import { useState } from "react";

export const PriceContext = createContext();

function PriceContextProvider({ children }) {
  //  const [state, dispatch] = useReducer(reducer, initialState, init)
   const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const [condition, setCondition] = useState("All");
  const [search, setSearch] = useState(null);

  return (
    <PriceContext.Provider value={{priceMin, setPriceMin, priceMax, setPriceMax, condition, setCondition, search, setSearch }}>
      {children}
    </PriceContext.Provider>
  );
}
export default PriceContextProvider;
