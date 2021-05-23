import { createContext } from 'react'
import { useState } from 'react'

export const MessageIncProductContext = createContext()

function MessageIncProductContextProvider({ children }) {
  //  const [state, dispatch] = useReducer(reducer, initialState, init)
  const [messages, setMessages] = useState([])

  return (
    <MessageIncProductContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageIncProductContext.Provider>
  )
}
export default MessageIncProductContextProvider
