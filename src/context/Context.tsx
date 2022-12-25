import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface InformationInterface {
  name: string;
  bio: string
  avatar_url: string
  blog: string
  html_url: string
  login: string
  company: string
  followers: string
}

export const ContextContents = createContext({} as any)

export function ContextProvider({children}: any) {

    const [IssuesSelected, setIssuesSelected] = useState({} as any)

    const [information, setInformation] = useState({} as InformationInterface)


    async function informationLoad() {
        const response = await api.get('/users/arthurfilho')

        setInformation(response.data)
    }


    function IssuesPageLoad(info:any) {
      setIssuesSelected(info)
    }

    useEffect(()=>{
        informationLoad()
    }, [])

      return (
          <ContextContents.Provider
            value={{
                IssuesPageLoad,
                IssuesSelected,
                informationLoad,
                information,
            }}
          >
            {children}
          </ContextContents.Provider>
        )
       }