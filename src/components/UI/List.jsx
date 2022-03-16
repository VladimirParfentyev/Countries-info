import React, {Children} from 'react'
import styled from 'styled-components';


const Wrapper = styled.section `
    width: 100%;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    @media(min-width:550px){
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    @media(min-width:767px){
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
    @media(min-width: 1024px){
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem;
    }
`;

export const List = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
