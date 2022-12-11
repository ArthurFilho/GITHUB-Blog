import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { api } from "../../lib/axios";
import { AllContainers, Cards, ContainerAvatar, ContainerCards, ContainerLinks, ContainerProfile, ContainerText, Description, Links, TitleAndLink } from "./styles";
import click from "../../assets/ProfilePage/click.svg"
import follow from "../../assets/ProfilePage/follow.svg"
import github from "../../assets/ProfilePage/github.svg"

  interface InformationInterface {
    name: string;
    bio: string
    avatar_url: string
    blog: string
}

export function ProfilePage(){

    const [information, setInformation] = useState<any>({})

    async function informationLoad() {
        const response = await api.get('/users/arthurfilho')

        setInformation(response.data)
    }

    useEffect(()=>{
        informationLoad()
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
            <ContainerLinks> {information.login == null ? '' : <Links> <img src={github} /> {information.login}</Links>} {information.company == null ? '' : <Links>{information.company}</Links>} {information.follow <= 0 ? '' : <Links> <img src={follow} /> {information.followers} seguidores</Links>} </ContainerLinks>
        </div>
        </ContainerProfile>
        
           <SearchForm/>
        </AllContainers>

        <ContainerCards>
            <Cards>
                <ContainerText>
                    <p>JavaScript data types and data structures</p>
                    <p>Há 1 dia</p>
                </ContainerText>

                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
            </Cards>
            <Cards>
                <ContainerText>
                    <p>JavaScript data types and data structures</p>
                    <p>Há 1 dia</p>
                </ContainerText>

                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
            </Cards>
            <Cards>
                <ContainerText>
                    <p>JavaScript data types and data structures</p>
                    <p>Há 1 dia</p>
                </ContainerText>

                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
            </Cards>
            <Cards>
                <ContainerText>
                    <p>JavaScript data types and data structures</p>
                    <p>Há 1 dia</p>
                </ContainerText>

                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
            </Cards>
            
        </ContainerCards>

        </>
    )
}