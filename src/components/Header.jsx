import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Container} from "./UI/Container";
import {IoMoon, IoMoonOutline} from "react-icons/io5";
import {Link} from 'react-router-dom';

const HeaderEl = styled.header `
    box-shadow:var(--shadow);
    background-color: var(--shadow);
`;

const Wrapper = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
`;

const Title = styled(Link).attrs({
    to:'/',
})`
    color:var(--color-text);
    text-decoration:none;
    border: 1px solid blue;
    padding:0.5rem;
    border-radius:30px;
    &:hover{
        color:blue;
    }
`;

const ModeSwitcher = styled.div`
    cursor: pointer;
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-transform: capitalize;
`;

export const Header = () => {
    const [theme, setTheme]=useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(()=>{
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>
                        All countries 
                    </Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme==='light' 
                        ?
                            (<IoMoonOutline/> )
                        :
                            (<IoMoon/>)
                        }
                        <span style={{marginLeft:'1rem'}}>{theme} theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};
