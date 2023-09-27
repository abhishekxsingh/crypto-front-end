import React, { Fragment, useState } from "react";
import axios from "axios";
import "./index.scss";


const Portfolio = (props) => {
    const [suggestions, setSuggestions] = useState([]);

    const getSuggestions = async (evt) => {
        const {value} = evt.target;
        const {data} = await axios.get(`http://localhost:3001/coins/suggestions?name=${value}`);
        console.log(data)
        setSuggestions(data)
    }
  return (
    <Fragment>
       <div className="portfolio">
                <div className="portfolio-content">
                    <h1>Portfolio</h1>
                    <div className="search">
                    <input className="search-box"  id="exampleDataList" autoComplete="on" list="suggestions" 
                    onChange = {getSuggestions} placeholder="search crypto coin here..." />
                     <table className="suggest">
                        <thead>
                            <tr>
                                <th>name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {suggestions.map(i=>{
                                return <tr>
                                    <td>{i.name}</td>
                                </tr>
                            })}
                        </tbody>
                     </table>
                    <button className="btn">search</button>
                    </div>
                    <form className="info">
                    <div >
                        <label htmlFor="current-price" className="text">Current Price Of Coin</label>
                        <input type="float" placeholder='current price'/>
                        <label htmlFor="quantity"className="text">Quantity To Buy</label>
                        <input type="integer" placeholder='enter quantity here'/>
                    </div>
                    <div className="info">
                        <label htmlFor="total" className="text">Total Investment</label>
                        <input type="float" placeholder='total money invested' />
                    </div>
                    <div className="buy">
                        <button className="save-btn">
                            save
                        </button>
                    </div>
                    </form>
                </div>
            </div>
    </Fragment>
  );
};

export default Portfolio;
