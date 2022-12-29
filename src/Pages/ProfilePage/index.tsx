import { useContext, useEffect, useState } from "react";
import { AllContainers, ButtonIssues, Cards, ContainerAvatar, ContainerCards, ContainerLinks, ContainerProfile, ContainerText, Description, Links, SearchFormContainer, TitleAndLink } from "./styles";
import click from "../../assets/ProfilePage/click.svg"
import follow from "../../assets/ProfilePage/follow.svg"
import github from "../../assets/ProfilePage/github.svg"
import { ContextContents } from "../../context/Context";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { api } from "../../lib/axios";


export function ProfilePage(){
    
    const { IssuesPageLoad, information} = useContext(ContextContents)

    const [issues, setIssues] = useState<any>({})

    const [IssuesInformation, setIssuesInformation] = useState([] as any)

    const [text, setText] = useState(``)

    const [writing, setWriting] = useState()


async function IssuesInfo() {
    
    const response = await api.get(`/search/issues?q=${text}%20repo:ArthurFilho/GITHUB-Blog`)

        setIssuesInformation(response.data.items)
}

async function IssuesInfoC() {
    
    const response = await api.get(`/repos/arthurfilho/GITHUB-blog/issues`)

        setIssuesInformation(response.data.items)
}

async function IssuesLoad() {
    const response = await api.get('/repos/arthurfilho/GITHUB-blog')
    setIssues(response.data)
}

 useEffect(()=>{
    IssuesLoad()
    if (writing) {
        const timeoutId = setTimeout(() => {
     { text == '' ? 
        IssuesInfo()
        :
        IssuesInfoC()
    }
        }, 1000)
        return () => clearTimeout(timeoutId)
    }
    
}, [text])

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
            <ContainerLinks> 
                {information.login == null ? '' : <Links> <img src={github} /> {information.login}</Links>} 
                {information.company == null ? '' : <Links>{information.company}</Links>} 
                <Links> <img src={follow} /> {information.followers} seguidores</Links> 
            </ContainerLinks>
        </div>
        
        </ContainerProfile>
        
        <SearchFormContainer>
        
        <div>
        <p>Publicações</p>
        <p>{issues.open_issues_count} publicações</p>
        </div>
        <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={event => setText(event.target.value)}
        />    

        </SearchFormContainer>  

        </AllContainers>

        <ContainerCards>
       
        {IssuesInformation?.map((info: any)=>{
            return(
            <ButtonIssues onClick={() => {IssuesPageLoad(info.number)}}>
            <Cards to='/issuespage'>
            <ContainerText>
                <div>{info.title}</div>
                <a>{formatDistanceToNow(new Date(info.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                </a>
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