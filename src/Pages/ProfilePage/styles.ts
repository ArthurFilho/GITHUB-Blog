import { NavLink } from "react-router-dom";
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

export const Cards = styled(NavLink)`
    display: flex;
    width: 400px;
    height: 180px;;
    padding: 20px;
    margin-bottom: 50px;
    background-color: ${props => props.theme["blue-900"]};
    flex-direction: column;
    border-radius: 10px;
    color: ${props => props.theme.white};
    text-decoration: none;
    p {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`

export const ContainerText = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    a , a:link, a:visited, a:active, a:hover {
	text-decoration: none;
    opacity: 0.5;
    font-size: 11px;
	}
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

export const ButtonIssues = styled.button`
    background-color: ${props => props.theme["blue-1100"]};
    border: none;
`