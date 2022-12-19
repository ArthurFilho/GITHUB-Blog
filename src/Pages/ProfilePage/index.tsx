import { useContext } from "react";
import { SearchForm } from "../../components/SearchForm";
import { AllContainers, ButtonIssues, Cards, ContainerAvatar, ContainerCards, ContainerLinks, ContainerProfile, ContainerText, Description, Links, TitleAndLink } from "./styles";
import click from "../../assets/ProfilePage/click.svg"
import follow from "../../assets/ProfilePage/follow.svg"
import github from "../../assets/ProfilePage/github.svg"
import { dataFormatter } from "../../utils/formatter";
import { ContextContents } from "../../context/Context";


export function ProfilePage(){

    const { IssuesPageLoad, IssuesInformation, information,  } = useContext(ContextContents)

   

    return(
        <>
        <AllContainers>
       
        <ContainerProfile>

        <ContainerAvatar>
            <img src={information.avatar_url} />
        </ContainerAvatar>
        <div>
            <TitleAndLink>
            <h3>{information.name}</h3>
            <a href={information.html_url}>github <img src={click} /></a>
            </TitleAndLink>
            <Description>{information.bio}</Description>
            <ContainerLinks> {information.login == null ? '' : <Links> <img src={github} /> {information.login}</Links>} {information.company == null ? '' : <Links>{information.company}</Links>} <Links> <img src={follow} /> {information.followers} seguidores</Links> </ContainerLinks>
        </div>
        </ContainerProfile>
        
           <SearchForm/>
        </AllContainers>

        <ContainerCards>
       
        {IssuesInformation.map((info: any)=>{
            return(
            <ButtonIssues onClick={() => {IssuesPageLoad(info.number)}}>
            <Cards to='/issuespage'>
            <ContainerText>
                <div>{info.title}</div>
                <a>{dataFormatter.format(new Date(info.created_at))}</a>
            </ContainerText>
            <p>{info.body}</p>
            </Cards>
            </ButtonIssues>
                )
            }
        )
    } 
        </ContainerCards>

        </>
    )
}