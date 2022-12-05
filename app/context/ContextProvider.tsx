import { useReducer } from "react"
import { AppContext, appReducer, initialState } from "./appInfo"

export const ContextProvider = ({children}:{children:React.ReactNode}) => {

    const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      { children }
      </AppContext.Provider>
  )
}
