import styled from 'styled-components';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {filterByCode} from '../config';
import {useNavigate} from 'react-router-dom';

const Wrapper = styled.section `
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

`;

const InfoImage = styled.img `
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1 `
  margin: 1rem;
  text-align:center;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 200px) {
    flex-direction: row;
  }
`;

const List = styled.ul `
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li `
  line-height: 1.8;
  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div `
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  & > b {
    font-weight: var(--fw-bold);
  }
  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div `
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span `
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

export const DetailsInfo = (props) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = []
    } = props;

    const [neighbors,
        setNeighbors] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        if (borders.length) 
            axios.get(filterByCode(borders)).then(({data}) => setNeighbors(data.map(n => n.name)));
        }
    , [borders]);

    return (
        <>
            <InfoTitle>{name}</InfoTitle>
            <Wrapper>
                <ListGroup>
                    <div>
                      <InfoImage src={flag} alt={name}/>
                    </div>
                    <Meta>
                        <b>Border Countries</b>
                        {!borders.length
                            ? (
                                <span>There is no border countries</span>
                            )
                            : (
                                <TagGroup>
                                    {neighbors.map((b) => (
                                        <Tag key={b} onClick={() => navigate(`/country/${b}`)}>
                                            {b}
                                        </Tag>
                                    ))}
                                </TagGroup>
                            )}
                    </Meta>
                </ListGroup>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native Name:</b>
                            {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population:</b>
                            {population} people.
                        </ListItem>
                        <ListItem>
                            <b>Region:</b>
                            {region}
                        </ListItem>
                        <ListItem>
                            <b>Sub Region:</b>
                            {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital:</b>
                            {capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Top Level Domain</b>{' '} {topLevelDomain.map((d) => (
                                <span key={d}>{d}</span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Currency</b>{' '} {currencies.map((c) => (
                                <span key={c.code}>{c.name}
                                </span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Top Level Domain</b>{' '} {languages.map((l) => (
                                <span key={l.name}>{l.name}</span>
                            ))}
                        </ListItem>
                    </List>
                </ListGroup>
            </Wrapper>
        </>
    );
};