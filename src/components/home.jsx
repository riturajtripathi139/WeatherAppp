// import axios from 'axios';
import { useEffect, useState } from 'react';
import './home.css';
import Table from './table';
import Navbar from './Navbar';
import Loader from './loader';


function Home() {
  const [dataTable, setDataTable] = useState([]);
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false);
  const [searchTerm,setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=40&offset=${offset}`);
        const data = await response.json();
        setDataTable((prev) =>[...prev, ...data.results]);
        setLoading(false);  
      } catch (error) {
        setLoading(false);
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
}, []);

const handleScroll = async () => {
    if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
    ) {
        setLoading(true);
        setOffset((prev) => prev + 40);
    }
};


  const column = [
    { heading: 'Name', value: 'name'},
    { heading: 'Country Name', value: 'cou_name_en' },
    { heading: 'Population', value: 'population' },
    { heading: 'Timezone', value: 'timezone' },
  ]
  
  return (
    <>
    <Navbar/>
    <div className="App">
      <h1>Cities</h1> 
      <div className='input-wrapper'>
          <input type="text" placeholder='Enter City Name' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}  />
          <button style={{backgroundColor:'#FCA311'}} ><i className="fa-solid fa-magnifying-glass" style={{fontSize:'18px', color:'black'}}></i> </button>
      </div>
      
    </div>
    <Table data={dataTable} column={column} searchTerm={searchTerm} />
      <Loader/>
    </>
  );
}

export default Home;