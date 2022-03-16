import React from 'react'
import {useParams, useLocation, useNavigate} from 'react-router-dom'
import wiki from 'wikipedia'
import {useEffect, useState} from 'react'
import { Button } from '../components/UI/Button'
import { useCurrentWidth } from '../components/hook/useCurrentWidth'
import Map from '../components/UI/MapStyle'
import styled from 'styled-components'
import useZoom from '../components/hook/useZoom'

const Wiki = styled.p`
    text-indent: 2rem;
    font-size: 1rem;
    text-align:justify;
    line-height:150%;
`;

const Title = styled.h1`
    text-align:center;
`

export const DeatilsCity = () => {
    const {name} = useParams()
    const location = useLocation()
    const {code} = location.state
    const [intro, setIntro] = useState('')
    const [city, setCity] = useState('')

    let width = useCurrentWidth();
    const {handleZoom, handleReduce, zoom} = useZoom(8)
    const navigate = useNavigate()

    useEffect(() => {
            if(code!=null)
            fetch(`http://localhost:3002/airports?city_code=${code}`)
                .then( res  => res.json())
                .then(result=>setCity(result))
    }, [code]);

    let map = city&&city.map(c=>(`${c.coordinates.lon},${c.coordinates.lat}`)).join(`,flag~`)
    
    useEffect(() => {
        (async() => {
            try {
                const page = await wiki.page(name);
                const intro = await page.intro();
                setIntro(intro)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [name]);

    return (
        <>
            <Button onClick={() => navigate(-1)}>GoBack</Button>
            <Title>{name}</Title>
            <Wiki>{intro}</Wiki>
            <Map>
                <img 
                    src = {`https://static-maps.yandex.ru/1.x/?l=map&pt=${map},flag&z=${zoom}&size=${width<640?width-20:640},400`}
                    alt =''
                />
                <div>
                    <Button onClick={handleZoom}>+</Button>
                    <Button onClick={handleReduce}>-</Button>
                </div>    
            </Map>
        </>
        
        
    )
}
