import React, { useState, useEffect, useHistory } from "react";
import { useParams, Link } from "react-router-dom";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';



export default function WForecast() {

    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [city, setCity] = useState(null)

    const [Wdata, setWData] = useState(null)

    const {cityId} = useParams();
    console.log(cityId);

    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  
    
  
    useEffect(()=>{   
        const getForecast = async () => {
            try {
                setLoading(true)
                const res = await fetch (`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${API_KEY}`)
                if (res.ok){
                    const data = await res.json();
                    setWData(data.list);
                    console.log(data.list);
                    setCity(data.city)
    
                }else {
                    throw Error('Something wrong with fetching');
                }
    
            }catch(err){
                setError(true);
                setErrorMessage(err.message);
            }finally {
                setLoading(false);
            }}
            getForecast();
        
        }, [cityId]);
  
      
    // Don't know why it shows "Object(...) is not a function" on history.
        // function GoBackButton(){
        //     const history = useHistory();
        //     const handleGoBack = () => history.goBack
        //     return ( <button onClick ={handleGoBack} >Go Back </button>)
        //     }
        



  
    return (
        <div>
            <h1>5 Day Forecast </h1>
            {city && (<h2>{city.name}, {city.country}</h2>)}
            {isLoading &&  <p>Loading...</p>}
            {hasError &&  <p>{errorMessage}</p>}
            {Wdata && ( <div className = "areaChart">
                <AreaChart
                    width={500}
                    height={400}
                    data={Wdata}
                    margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dt_txt" />
                    <YAxis dataKey = "main.temp" />
                    <Tooltip />
                    <Area type="monotone" dataKey="main.temp" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                {/* <GoBackButton /> */}
                <Link to= "/">Go Back </Link>
                </div>

            )}
            
           
          
         </div>

    )

    }

 
