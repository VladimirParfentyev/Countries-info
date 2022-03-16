import styled from "styled-components";
import React from 'react'


const Map = styled.div `
position:relative; 
display: flex;
justify-content: center;
    div{
        color:red;
        display: flex;
        flex-direction:row;
        position:absolute;
        justify-content: center;
        margin: 1rem;
        button{
            margin: 1rem;
        }
    }
`

const MapStyle = ({children}) => {

    return (
        <Map>
            {children}
        </Map>
    )
}

export default MapStyle