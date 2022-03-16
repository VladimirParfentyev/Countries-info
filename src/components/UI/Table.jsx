import styled from 'styled-components';

export const Table = styled.table `
    width: 100%;
	margin-bottom: 20px;
	border: 1px solid #dddddd;
	border-collapse: collapse;
    font-size: 0.8rem; 
    th{
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #04AA6D;
    color: white;
    }
    td{
    border: 1px solid #ddd;
    padding: 2px;
    text-align:center;
        &:nth-child(1){
            text-align:start;
            padding-left:1rem;
        }
    }
    tr{
	border: 1px solid #dddddd;
	padding: 5px;
        &:nth-child(even){
        background-color: #f2f2f2;
        };
        &:hover {
            background-color: #ddd;
        }
    }
`