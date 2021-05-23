import { createContext } from 'react'
import { useState } from 'react'

export const PriceContext = createContext()

function PriceContextProvider({ children }) {
  //  const [state, dispatch] = useReducer(reducer, initialState, init)
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(0)
  const [condition, setCondition] = useState(null)
  const [search, setSearch] = useState(null)
  const [search2, setSearch2] = useState(null)
  const [sort, setSort] = useState('')

  return (
    <PriceContext.Provider
      value={{
        priceMin,
        setPriceMin,
        priceMax,
        setPriceMax,
        condition,
        setCondition,
        search,
        setSearch,
        sort,
        setSort,
        search2,
        setSearch2
      }}
    >
      {children}
    </PriceContext.Provider>
  )
}
export default PriceContextProvider
