import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const Crypto = () => {
  const [search, setSearch] = useState("")
  const [CoinList, setCoinList] = useState([])
  const [filteredCoinList, setfilteredCoinList] = useState([])
    
    const getList = async () => {
        try {
          const response = await axios.get('http://localhost:3001/coins');
            setCoinList(response.data)
            setfilteredCoinList(response.data)
        } catch (error) {
            console.error(error);
        }
  };

const columns = [
  {
    name: 'Ranking',
    selector: row => row.market_cap_rank,
    sortable: true,
},
{
    name: 'Picture',
    selector: (row, id) => {
        return <img src={row.image} alt='notloaded' height={"100px"} width={"100px"} />
    },
    sortable: true,
},
{
    name: 'Name',
    selector: row => row.name,
    sortable: true,
},
{
    name: 'Day high',
    selector: row => row.high_24h,
    sortable: false,
},
{
    name: 'Day low',
    selector: row => row.low_24h,
    sortable: false,
},
{
    name: 'Symbol',
    selector: row => row.symbol,
    sortable: false,
},
{
    name: 'Current Price',
    selector: row => row.current_price,
    sortable: false,
},
{
  name: 'last_updated',
  selector: row => row.last_updated,
  sortable: false,
},
{
    name: 'Total Volume',
    selector: row => row.total_volume,
    sortable: false,
},
];

  useEffect(() => {
    getList();
  })

  useEffect(() => {
      const result = CoinList.filter(coin => {
        return coin.name.toLowerCase().match(search.toLowerCase());
      })

      setfilteredCoinList(result)
  }, [search , CoinList])
    return (
        <DataTable
            title="Coin List"
            columns={columns}
            data={filteredCoinList }
            pagination
            fixedHeader
            fixedHeaderScrollHeight='680px'
            highlightOnHover
            subHeader
            subHeaderComponent= {<input type="text" 
            placeholder="search here" 
            className='w-25 form-control'
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>}
            />
    );
};

export default Crypto;