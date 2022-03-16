import React from 'react'
import styled from 'styled-components';

const PaginationS = styled.div`
    ul{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: center;  
        padding: 0;  
        li{
            list-style:none;
            border-right:1px solid white;
            &:last-child {
                border-right:none;
            }  
            &:first-child a {
                border-top-left-radius: 0.5rem;
                border-bottom-left-radius: 0.5rem;
            }
            &:last-child a {
                border-top-right-radius: 0.5rem;
                border-bottom-right-radius: 0.5rem;
            }
            a{
                text-decoration:none;
                display: block;
                padding: 0.2rem 0.5rem;
                background-color:#DDD;
                &:hover:not(.active) {
                    background-color: #3caf55;
                }
            }
                .active{
                    background-color: #4CAF50;
                    color: white;
            }
        }
        
    }
`;


const Pagination = ({countriesPerPage, totalCountries, paginate, currentPage}) => {
    const pageNumbers = [];

    for(let i=1; i<Math.ceil(totalCountries/countriesPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        <PaginationS>
            <ul>
                {pageNumbers.map(num=>
                    <li key={num} >
                            <a href='#' 
                                onClick={()=>paginate(num)}
                                className={`page ${currentPage === num ? "active" : ""}`}
                            >
                                {num}
                            </a>
                    </li>
                )}
            </ul>
        </PaginationS>
    )
}

export default Pagination