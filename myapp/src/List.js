import { useState, useEffect } from "react";

export default function List() {
    const [data, setData] = useState([])
    const endPoint = "https://api.data.gov.hk/v1/carpark-info-vacancy"
    //fetch data from URL

    const load = () => {
        fetch(endPoint)
          .then(response => response.json())
          .then(data => {setData(data.results)}); 
    }
    
    useEffect(() => {
        load()
    })

    return (
        <div>
            {data.map(item => 
                <li>
                    id: {item.park_Id}<br /> 
                    place: {item.displayAddress}<br /> 
                </li>
            )}
        </div>
    )
}