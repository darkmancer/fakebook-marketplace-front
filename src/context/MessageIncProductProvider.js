import { createContext } from 'react'
import { useState } from 'react'

export const MessageIncProductContext = createContext()

function MessageIncProductContextProvider({ children }) {
  //  const [state, dispatch] = useReducer(reducer, initialState, init)
  const [messages, setMessages] = useState([])
  const [newReceiverIdForBuy, setNewReceiverIdForBuy] = useState(null)
  const [newReceiverIdForSell, setNewReceiverIdForSell] = useState(null)
  const [newProductIdForSell, setNewProductIdForSell] = useState(null)
  const [newProductIdForBuy, setNewProductIdForBuy] = useState(null)

  return (
    <MessageIncProductContext.Provider
      value={{
        messages,
        setMessages,
        newReceiverIdForBuy,
        setNewReceiverIdForBuy,
        newReceiverIdForSell,
        setNewReceiverIdForSell,
        newProductIdForSell,
        setNewProductIdForSell,
        newProductIdForBuy,
        setNewProductIdForBuy
      }}
    >
      {children}
    </MessageIncProductContext.Provider>
  )
}
export default MessageIncProductContextProvider
