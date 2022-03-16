import React from 'react'
import { Container } from './Container'
import styled from 'styled-components';

const Wrapper = styled.main`
    padding: 1rem;
    @media(max-width:767px){
        padding: 0;
    }
`;

export const Main = ({children}) => {
  return (
    <Wrapper>
        <Container>
            {children}
        </Container>
    </Wrapper>
  )
}
