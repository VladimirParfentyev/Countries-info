import React, {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import {searchByCountry} from '../config';
import {Button} from '../components/UI/Button';
import {DetailsInfo} from '../components/DetailsInfo';
import { CountryInfo } from '../components/CountryInfo';
import wiki from 'wikipedia';
import { Container } from '../components/UI/Container';
import styled from 'styled-components';

const Wiki = styled.p`
    text-indent: 2rem;
    font-size: 1rem;
    text-align:justify;
    line-height:150%;
`;

export const DetailsPage = () => {
    const {name} = useParams();
    const navigate = useNavigate();
    
    const [country, setCountry] = useState(null)
    const [cities, setCities]=useState(null)
    const [intro, setIntro]=useState('')

    useEffect(() => {
        axios
            .get(searchByCountry(name))
            .then(r => setCountry(r.data[0]))
            .catch(err => console.log(err.response))
    }, [name])

    useEffect(() => {
      if(country!=null)
      axios
        .get(`http://localhost:3001/countrys?country_code=${country.alpha2Code}`)
        .then(res  => setCities(res.data))
        .catch(err => console.log(err.response))
    }, [country]);

    useEffect(() => {
      (async () => {
        try {
          const page = await wiki.page(country.name);
          const intro = await page.intro();
          setIntro(intro)
        } catch (error) {
          console.log(error);
        }
      })()
    }, [country]);
    
      
    return (

        <Container>
            <Button onClick={() => navigate(-1)}>GoBack</Button>
            {country && <DetailsInfo {...country}/>}
            <Wiki>{intro&&intro}</Wiki>
            {cities&& <CountryInfo cities={cities} capital={country.capital}/>}
        </Container>
    )
}
