import styled from "styled-components";
import {IoSearch} from "react-icons/io5";
import React, {useState} from 'react'

const InputContainer = styled.label `
    background-color: var(--colors-ui-base);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin: 1rem 0;
    @media (min-width: 767px){

    }
`;

const Input = styled
    .input
    .attrs({type: 'search', placeholder: 'Search for a country...'})`
    margin-left: 2rem;
    overflow:hidden;
    border: 0;
    border-color: var(--color-bg);
    color: var(--color-text)
`;

export const Search = ({search,setSearch}) => {

    console.log(search)
    return (
        <InputContainer>
            <IoSearch/>
            <Input value={search} onChange={(e) => setSearch(e.target.value)}/>
        </InputContainer>
    )
}
