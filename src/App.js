import React from "react";
import { useDispatch, useSelector } from "react-redux";
import updatePlaceData from "./actions";

import './style.css';

const App = () => {
  const data = useSelector((state) => state.place);
  const dispatch = useDispatch();
  return (
    <>
    <div className="container">
      <h1 className="header">Covid19 Tracker App</h1>
      <button onClick={() => dispatch(updatePlaceData())} className="btn">Get Data</button>
      <hr />
      
      {data.statewise ? (
         <div>
           <h2 className="head">Total Case</h2>
            <div className="tot_main">
            <h3 className="tot_container">Active: {data.statewise[0].active}</h3>
            <h3 className="tot_container">Deths: {data.statewise[0].deaths}</h3>
            <h3 className="tot_container">Recovered: {data.statewise[0].recovered}</h3>
            </div>
            <h2 className="head">Case In West Bengal</h2>
            <div className="tot_main">
            <h3 className="tot_container">Active: {data.statewise[37].active}</h3>
            <h3 className="tot_container">Deths: {data.statewise[37].deaths}</h3>
            <h3 className="tot_container">Recovered: {data.statewise[37].recovered}</h3>
            </div>
        </div>
      ) : (
        <h1 className="secondary">Click the get data button for fetching data</h1>
      )}
</div>
    </>
  );
};

export default App;
