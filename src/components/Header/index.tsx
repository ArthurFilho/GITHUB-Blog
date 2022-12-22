import { ContainerHeader, ImgHeader } from "./styles";
import Logo from "../../assets/ProfilePage/Logo.svg"
import Background from "../../assets/ProfilePage/background.svg"

export function Header(){
    return(
        <>
        <ContainerHeader>

        <ImgHeader src={Background} />

        </ContainerHeader>
        </>
    )
}