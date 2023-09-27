import React from 'react';
import { useState, useEffect } from "react";
import './index.scss';


function Coinapi() {
  const [coins, setCoins] = useState([])
  const [limit, setLimit] = useState(20)

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch(`https://api.coincap.io/v2/assets?limit=${limit}`)
      const data = await res.json()
      console.log(data.data)
      setCoins(data.data)
    }

    fetchCoins()
  }, [limit])

  const handleRefresh = () => {
    setLimit(20)
    window.scrollTo(0, 0)
  }

  return (
    <section className="coins">
      <article>
        <p>Showing {coins.length} coins</p>
      </article>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price (USD)</th>
          </tr>
        </thead>

        <tbody>
          {coins.map(({ id, name, rank, priceUsd }) => (
            <tr key={id}>
              <td>{rank}</td>
              <td>{name}</td>
              <td>${parseFloat(priceUsd).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="buttons">
        <button onClick={() => setLimit(limit + 20)}>Next</button>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
    </section>
  );
}

export default Coinapi;