import click from "../../assets/ProfilePage/click.svg"
import github from "../../assets/ProfilePage/github.svg"
import Comments from "../../assets/issues/comments.svg"
import Date from "../../assets/issues/date.svg"
import Back from "../../assets/issues/back.svg"
import { ContainerIssues, Links , ContainerProfileIssues, ContainerLinks, Navigator } from "./styles"


export function IssuesPage(props:any){ 
    return(
        <ContainerIssues>
        <ContainerProfileIssues> 
        
            
            <ContainerLinks>
            <Navigator to="/">
            <Links> <img src={Back} /> VOLTAR</Links>
            </Navigator>
            <Links href={props.html_url}>github <img src={click} /></Links>
            </ContainerLinks>
                
            <h1>{props.title}</h1>
            
            <div> {props.login == null ? '' : <div> <img src={github} /> {props.login}</div>} {props.company == null ? '' :  <div> <img src={Date} /> {props.date}</div>} <div> <img src={Comments} /> {props.comments} Comments</div> </div>
        
        </ContainerProfileIssues>
        </ContainerIssues>
    )
} 