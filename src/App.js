import { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  useEffect(() => {
    axios.get("https://api.coinpaprika.com/v1/tickers")
          .then((res) => {
            setCoins(res.data)
          })
      setLoading(false)
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? null : coins.length}</h1>
      {loading ? <strong>Loading.........</strong> : null}
      <ul>
        {coins.map((coin) => <li key={coin.id}>Coin Name : {coin.name} ({coin.symbol}) Price : ${coin.quotes.USD.price} USD</li>)}
      </ul>
    </div>
  );
}

export default App;
