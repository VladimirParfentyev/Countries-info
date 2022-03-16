
import React, {useState} from 'react'

const useZoom = (scale) => {

    const [zoom,setZoom] = useState(scale)
    
    const handleZoom = (() => {
        if (zoom < 15) {
            setZoom(zoom + 1)
        }
    })

    const handleReduce = (() => {
        if (zoom > 0) {
          setZoom(zoom - 1)
        }
    })

  return {handleZoom,handleReduce,zoom}
}

export default useZoom