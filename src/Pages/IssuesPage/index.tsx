import click from "../../assets/ProfilePage/click.svg"
import github from "../../assets/ProfilePage/github.svg"
import Comments from "../../assets/issues/comments.svg"
import Date from "../../assets/issues/date.svg"
import Back from "../../assets/issues/back.svg"
import { ContainerIssues, Links , ContainerProfileIssues, ContainerLinks, Navigator, InfoGithub, ContainerIssuesDescription } from "./styles"
import { useContext } from "react"
import { ContextContents } from "../../context/Context"


export function IssuesPage(){ 

    const { IssuesPageLoad } = useContext(ContextContents)

    return(
        <ContainerIssues>
        <ContainerProfileIssues> 
        
            
            <ContainerLinks>
            <Navigator to="/">
            <Links> <img src={Back} /> VOLTAR</Links>
            </Navigator>
            <Links href={IssuesPageLoad.html_url}>github <img src={click} /></Links>
            </ContainerLinks>
                
            <h1>{IssuesPageLoad.title}</h1>
            
            <div> 
                { IssuesPageLoad.login == null ? '' : <InfoGithub> <img src={github} /> {IssuesPageLoad.login} </InfoGithub> } 
                { IssuesPageLoad.company == null ? '' :  <InfoGithub> <img src={Date} /> {IssuesPageLoad.created_at} </InfoGithub> }
                { IssuesPageLoad.comments == null ? '' : <InfoGithub> <img src={Comments} /> {IssuesPageLoad.comments} Comments </InfoGithub> }
            </div>
        
        </ContainerProfileIssues>

        <ContainerIssuesDescription>eae</ContainerIssuesDescription>

        </ContainerIssues>
    )
} 