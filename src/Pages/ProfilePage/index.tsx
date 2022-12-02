import { Header } from "../../components/Header";
import { AllContainers, ContainerAvatar, ContainerProfile, TitleAndLink } from "./styles";

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
            <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
            <p> DASKDJKADJKASDJKASJKDASJKDJKASDJKSDJKASDJKASK</p>
        </div>
        </ContainerProfile>
        
        </AllContainers>
        </>
    )
}