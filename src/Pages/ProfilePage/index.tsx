import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { api } from "../../lib/axios";
import { AllContainers, Cards, ContainerAvatar, ContainerCards, ContainerProfile, ContainerText, Description, TitleAndLink } from "./styles";

  interface InformationInterface {
    name: string;

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
            <a href="#">github</a>
            </TitleAndLink>
            <Description>{information.bio}</Description>
            <Description><a href={information.blog}>Linkedin</a> </Description>
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