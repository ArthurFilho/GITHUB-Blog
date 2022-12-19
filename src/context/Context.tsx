import { createContext, useState } from "react";

export const ContextContents = createContext({} as any)

export function ContextProvider({children}: any) {

    const [IssuesSelected, setIssuesSelected] = useState({} as any)

    function IssuesPageLoad(info:any) {
        setIssuesSelected(info)
    }
  
      return (
          <ContextContents.Provider
            value={{
                IssuesPageLoad,
                IssuesSelected
            }}
          >
            {children}
          </ContextContents.Provider>
        )
       }