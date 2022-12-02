import { ContainerHeader } from "./styles";
import Logo from "../../assets/ProfilePage/Logo.svg"
import Background from "../../assets/ProfilePage/background.svg"

export function Header(){
    return(
        <>
        <ContainerHeader>

        <img src={Background} />

        </ContainerHeader>
        </>
    )
}