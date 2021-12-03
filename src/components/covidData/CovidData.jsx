import React, { useEffect, useState } from 'react';
import './CovidData.css';
const CovidData = () => {
    const [data, setdata] = useState([]);
    const getCovidData = async () =>{
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        setdata(actualData.statewise);
    }
    
    useEffect(()=>{
        getCovidData();
    });
    return (
        <div className="CovidData">
            <h1>Covid-19 Live Details Of India</h1>
            <table>
                <thead>
                    <tr>
                        <th> State </th>
                        <th> Confirmed </th>
                        <th> Recovered </th>
                        <th> Deaths </th>
                        <th> Active </th>
                        <th> Last Updated Time </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,ind)=>{
                            return(
                                <tr key={ind}>
                                    <th> {item.state} </th>
                                    <th> {item.confirmed} </th>
                                    <th> {item.recovered} </th>
                                    <th> {item.deaths} </th>
                                    <th> {item.active} </th>
                                    <th> {item.lastupdatedtime} </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CovidData;
