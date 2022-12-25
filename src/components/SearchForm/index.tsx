import { useContext, useEffect, useState } from "react";
import { ContextContents } from "../../context/Context";
import { api } from "../../lib/axios";
import { SearchFormContainer } from "./styles";

export function SearchForm(){

   const { setText } = useContext(ContextContents)

    const [issues, setIssues] = useState<any>({})

    async function IssuesLoad() {
        const response = await api.get('/repos/arthurfilho/GITHUB-blog')

        setIssues(response.data)
    }

    useEffect(()=>{
        IssuesLoad()
    }, [])

    return(
        <SearchFormContainer>
        <div>
        <p>Publicações</p>
        <p>{issues.open_issues_count} publicações</p>
        </div>
        <input
        type="text"
        placeholder="Buscar conteúdo"
        />    
        </SearchFormContainer>   
    )
}



        