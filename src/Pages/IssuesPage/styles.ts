import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const ContainerLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 10px;
    width: 700px;
    color: ${props => props.theme["blue-100"]};
    a:link, a:visited, a:active {
	text-decoration: none;
	}
`

export const ContainerIssues = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerProfileIssues = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    width: 800px;
    height: 175px;
    position: absolute;
    gap: 10px;
    background-color: ${props => props.theme["blue-950"]};
`

export const Links = styled.a`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const Navigator = styled(NavLink)`
    color: ${props => props.theme["blue-100"]};
    a:link, a:visited, a:active {
        color: ${props => props.theme["blue-100"]};
	}
`

export const InfoGithub = styled.div`
    text-decoration: none;
    color: ${props => props.theme["gray-300"]};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const ContainerIssuesDescription = styled.div`
    margin-top: 300px;
    position: absolute;
    color: ${props => props.theme.white};
`