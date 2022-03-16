import React, {useState} from 'react'
import {useCurrentWidth} from './hook/useCurrentWidth';
import Map from './UI/MapStyle'
import {Button} from './UI/Button';
import { Container } from './UI/Container';
import TableCity from './TableCity';
import useZoom from './hook/useZoom'


export const CountryInfo = ({cities}) => {
    const map = cities
        .map(c => (`${c.coordinates.lon},${c.coordinates.lat}`))
        .splice(0, 30)
        .join(`,flag~`)

    const width = useCurrentWidth();
    const {handleZoom, handleReduce, zoom} = useZoom(3)


    return (
        <Container>
            <Map>
                {cities &&< img src = {
                    `https://static-maps.yandex.ru/1.x/?l=map&pt=${map},flag&z=${zoom}&size=${width < 640
                        ? width - 20
                        : 640},400`
                } />}
                <div>
                    <Button onClick={handleZoom}>+</Button>
                    <Button onClick={handleReduce}>-</Button>
                </div>
            </Map>
            <TableCity cities={cities}/>
        </Container>
    )
}
