import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { AllContainers, Cards, ContainerAvatar, ContainerCards, ContainerProfile, ContainerText, Description, TitleAndLink } from "./styles";

export function ProfilePage(){
    return(
        <>
        <Header />
        <AllContainers>
        
        <ContainerProfile>

        <ContainerAvatar></ContainerAvatar>
        <div>
            <TitleAndLink>
            <h3>Cameron Williamson</h3>
            <a href="#">github</a>
            </TitleAndLink>
            <Description>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</Description>
            <Description> DASKDJKADJKASDJKASJKDASJKDJKASDJKSDJKASDJKASK</Description>
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
        </ContainerCards>

        </>
    )
}