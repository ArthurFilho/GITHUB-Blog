import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  position: absolute;
  margin-top: 300px;
  width: 75%;
  color: ${props => props.theme.white};
  flex-direction: column;
  gap: 10px;

  div{
    display: flex;
    justify-content: space-between;
  }
  input {
    width: 100%;
    flex: 1;
    border-radius: 1px;
    background: ${(props) => props.theme['blue-1200']};
    color: ${(props) => props.theme.white};
    padding-left: 1rem;
    border: 1px solid ${props => props.theme['blue-800']};
    padding: 0.8rem;
    

    &::placeholder {
      color: ${(props) => props.theme['gray-600']};
    }
  }
`
