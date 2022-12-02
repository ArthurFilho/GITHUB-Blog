import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { AllContainers, ContainerAvatar, ContainerProfile, Description, TitleAndLink } from "./styles";

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
        </>
    )
}