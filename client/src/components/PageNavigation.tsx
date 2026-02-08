import { NavLink } from 'react-router';

import styled from 'styled-components'

const PageNavigation = ({title}:{title:string|undefined}) => {
  return (
    <Wrapper>
        <NavLink to={"/"}>Home</NavLink>/{title}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 3.2rem;
  }
  @media(max-width: ${({theme})=>theme.media.tab}){
  font-size:2.5rem;
  }
`;


export default PageNavigation