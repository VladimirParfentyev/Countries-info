import React from 'react'
import Cd from './Cd'
import {Table} from './UI/Table'
import {v4 as uuidv4} from 'uuid';
import {Links} from './UI/Links'

const TableCity = ({cities}) => {

    const dateNow = (date, i) => {
        let days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
        return days[date.getDay()+i];
    }

  return (
    <Table>
                <tr>
                    <th rowSpan={2}>City name</th>
                    <th colSpan={3}>{dateNow(new Date(),0)}</th>
                    <th colSpan={3}>{dateNow(new Date(),1)}</th>
                    <th colSpan={3}>{dateNow(new Date(),2)}</th>
                </tr>
                <tr>
                    <th>Average temperature</th>
                    <th>Wind speed</th>
                    <th>Cloud cover</th>
                    <th>Average temperature</th>
                    <th>Wind speed</th>
                    <th>Cloud cover</th>  
                    <th>Average temperature</th>
                    <th>Wind speed</th>
                    <th>Cloud cover</th>               
                </tr>                
                {cities.map((c) => (
                    <tr key={uuidv4()}>
                        <td>
                            <Links
                                to={`/country/city/${c.name_translations.en}`}
                                state={{
                                lon: `${c.coordinates.lon}`,
                                lat: `${c.coordinates.lat}`,
                                code: `${c.code}`
                            }}>{c.name}
                            </Links>
                        </td>
                        <Cd
                            lat={c.coordinates.lat.toFixed(2)}
                            lon={c.coordinates.lon.toFixed(2)}
                        />
                    </tr>
                ))}
            </Table>
  )
}

export default React.memo(TableCity)