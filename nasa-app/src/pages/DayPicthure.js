
import React, { useState } from "react";


function DayPicthure () {

    const [date, setDate] = useState('');
    const [apod, setApod] = useState({});

    const callTheFetch = () => {
        fetch(
            `https://api.nasa.gov/planetary/apod?api_key=guA7HsMfaMywaNrRoJljK45CerUdZ6ZRsjwQDtW5&date=${date}`,)
            .then(resp => resp.json())
            .then(result => {
                
                setApod(result)    
            })
    }

    return <>
    <div>
        <form>
                <input id="startDate" 
                    type="date" 
                    placeholder="Select date" 
                    aria-required='true' 
                    autoComplete="off" 
                    value={date}
                    onChange={(event)=> setDate(event.target.value)}
                />
                <button type="button" onClick={callTheFetch}>Go</button>
        </form>        
    </div>
    {apod.explanation}
    <img src={apod.url}/>
    </>
}

export default DayPicthure;