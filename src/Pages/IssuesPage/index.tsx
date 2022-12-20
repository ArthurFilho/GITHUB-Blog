import click from "../../assets/ProfilePage/click.svg"
import github from "../../assets/ProfilePage/github.svg"
import Comments from "../../assets/issues/comments.svg"
import Date from "../../assets/issues/date.svg"
import Back from "../../assets/issues/back.svg"
import { ContainerIssues, Links , ContainerProfileIssues, ContainerLinks, Navigator, InfoGithub, ContainerIssuesDescription } from "./styles"
import { useContext, useEffect, useState } from "react"
import { ContextContents } from "../../context/Context"
import { api } from "../../lib/axios"


export function IssuesPage(){ 

    const { IssuesSelected } = useContext(ContextContents)

    const [ IssuesDesc, setIssuesDesc] = useState({} as any)

    async function Issues() {
        const response = await api.get(`repos/ArthurFilho/GITHUB-Blog/issues/${IssuesSelected}`)

        setIssuesDesc(response.data)
    }

    useEffect(()=>{
        Issues()
    },[IssuesSelected])

    return(
        <ContainerIssues>
        <ContainerProfileIssues> 
        
            
            <ContainerLinks>
            <Navigator to="/">
            <Links> <img src={Back} /> VOLTAR</Links>
            </Navigator>
            <Links href={IssuesDesc.html_url}>github <img src={click} /></Links>
            </ContainerLinks>
                
            <h1>{IssuesDesc.title}</h1>
            
            <div> 
                { IssuesDesc.login == null ? '' : <InfoGithub> <img src={github} /> {IssuesDesc.login} </InfoGithub> } 
                { IssuesDesc.company == null ? '' :  <InfoGithub> <img src={Date} /> {IssuesDesc.created_at} </InfoGithub> }
                { IssuesDesc.comments == null ? '' : <InfoGithub> <img src={Comments} /> {IssuesDesc.comments} Comments </InfoGithub> }
            </div>
        
        </ContainerProfileIssues>

        <ContainerIssuesDescription>eae</ContainerIssuesDescription>

        </ContainerIssues>
    )
} 