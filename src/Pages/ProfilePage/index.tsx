import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { api } from "../../lib/axios";
import { AllContainers, Cards, ContainerAvatar, ContainerCards, ContainerLinks, ContainerProfile, ContainerText, Description, Links, TitleAndLink } from "./styles";
import click from "../../assets/ProfilePage/click.svg"
import follow from "../../assets/ProfilePage/follow.svg"
import github from "../../assets/ProfilePage/github.svg"
import { dataFormatter } from "../../utils/formatter";

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

export function ProfilePage(){

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

    useEffect(()=>{
        informationLoad()

        IssuesInfo()
    }, [])

    return(
        <>
        <Header />
        
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
            <Cards>
            <ContainerText>
                <div>{info.title}</div>
                <a>{dataFormatter.format(new Date(info.created_at))}</a>
            </ContainerText>
        
            <p>{info.body}</p>
            </Cards>
                )
            }
        )
    } 
        </ContainerCards>

        </>
    )
}