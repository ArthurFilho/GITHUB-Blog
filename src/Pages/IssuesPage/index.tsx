import click from "../../assets/ProfilePage/click.svg"
import github from "../../assets/ProfilePage/github.svg"
import Comments from "../../assets/issues/comments.svg"
import Dateimg from "../../assets/issues/date.svg"
import Back from "../../assets/issues/back.svg"
import { ContainerIssues, Links , ContainerProfileIssues, ContainerLinks, Navigator, InfoGithub, ContainerIssuesDescription, ContainerInfoGithub } from "./styles"
import { useContext, useEffect, useState } from "react"
import { ContextContents } from "../../context/Context"
import { api } from "../../lib/axios"

import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import rehypeRaw from "rehype-raw"


export function IssuesPage(){ 

    const { IssuesSelected, information } = useContext(ContextContents)

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
            <Links href={IssuesDesc.html_url}>VEJA NO GITHUB <img src={click} /></Links>
            </ContainerLinks>
                
            <h1>{IssuesDesc.title}</h1>
            
            <ContainerInfoGithub> 
                { IssuesDesc.login == '' ? '' : <InfoGithub> <img src={github} /> {information.login} </InfoGithub> } 
                { IssuesDesc.created_at == null ? '' :  <InfoGithub> <img src={Dateimg} /> {formatDistanceToNow(new Date(IssuesDesc.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })} </InfoGithub> }
                { IssuesDesc.comments == null ? '' : <InfoGithub> <img src={Comments} /> {IssuesDesc.comments} Comments </InfoGithub> }
            </ContainerInfoGithub>
        
        </ContainerProfileIssues>

        <ContainerIssuesDescription>
            <ReactMarkdown children={IssuesDesc.body} rehypePlugins={[rehypeRaw]} />
        </ContainerIssuesDescription>

        </ContainerIssues>
    )
} 