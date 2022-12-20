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

    const [IssuesInformation, setIssuesInformation] = useState([] as any)


    async function informationLoad() {
        const response = await api.get('/users/arthurfilho')

        setInformation(response.data)
    }

    async function IssuesInfo() {
        const response = await api.get('/repos/ArthurFilho/GITHUB-Blog/issues')

        setIssuesInformation(response.data)
    }

    function IssuesPageLoad(info:any) {
      setIssuesSelected(info)
    }

    useEffect(()=>{
        informationLoad()
        IssuesInfo()
    }, [])

    

      return (
          <ContextContents.Provider
            value={{
                IssuesPageLoad,
                IssuesSelected,
                informationLoad,
                IssuesInfo,
                information,
                IssuesInformation,
            }}
          >
            {children}
          </ContextContents.Provider>
        )
       }