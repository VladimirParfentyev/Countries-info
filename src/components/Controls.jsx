import React, {useState} from "react";
import {CustomSelect} from "./UI/CustomSelect";
import {Search} from "./UI/Search";
import styled from "styled-components";
import {useEffect} from "react";

const options = [
    {
        value: "Africa",
        label: "Africa"
    }, {
        value: "America",
        label: "America"
    }, {
        value: "Asia",
        label: "Asia"
    }, {
        value: "Europe",
        label: "Europe"
    }, {
        value: "Oceania",
        label: "Oceania"
    }
];

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 1rem;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = ({onSearch}) => {
    const [search,setSearch] = useState("");
    const [region, setRegion] = useState('');

    useEffect(() => {
        const regionValue = region?.value||'';
        onSearch(search, regionValue)
    }, [region, search])
    
    console.log(search)

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect 
                options={options} 
                placeholder='Filter by region'
                isClearable
                isSearchable={false}
                value = {region}
                onChange ={setRegion}
            />
        </Wrapper>
    );
};
