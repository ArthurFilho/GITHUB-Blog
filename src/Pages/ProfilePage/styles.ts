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
    width: 30%;
    height: 125px;
    display: flex;
    background-color: white;
    border-radius: 10px;
    margin-left: 10px;
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
`

export const Description = styled.p`
    opacity: 0.8;
    margin-bottom: 15px;
`