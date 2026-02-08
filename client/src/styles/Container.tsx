import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0rem 12rem;

  @media(max-width:${({theme})=>theme.media.mobile}){
  padding:0
  }
`;