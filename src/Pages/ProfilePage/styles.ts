import styled from "styled-components";

export const ContainerProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 800px;
    height: 175px;
    position: absolute;
    gap: 10px;
    background-color: ${props => props.theme["blue-950"]};
`

export const ContainerAvatar = styled.div`
    width: 25%;
    height: 125px;
    display: flex;
    margin-left: 10px;
    border-radius: 10px;
    justify-content: center;
    img{
        border-radius: 10px;
    }
`

export const AllContainers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TitleAndLink = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 10px;
    a:link, a:visited, a:active {
	text-decoration: none;
    color: #3294F8;
	}
`

export const Description = styled.p`
    opacity: 0.8;
    margin-bottom: 15px;
    display: flex;
`

export const ContainerCards = styled.div`
    display: flex;
    margin-top: 200px;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const Cards = styled.div`
    display: flex;
    width: 400px;
    height: 200px;;
    padding: 10px;
    margin-bottom: 50px;
    background-color: ${props => props.theme["blue-900"]};
    flex-direction: column;
    color: ${props => props.theme.white};
`

export const ContainerText = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`

export const ContainerLinks = styled.div`
    display: flex;
    gap: 10px;
`

export const Links = styled.div`
    text-decoration: none;
    color: ${props => props.theme["gray-300"]};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`