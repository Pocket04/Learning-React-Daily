import './App.css'
import Characters from "./components/Characters.jsx";
import {fetchCharacters} from "./services/fetchAPI.js";
import {useEffect, useState} from "react";

function App() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const info = await fetchCharacters()
                setData(info)
            } catch (err) {
                console.error(err)
            }finally {
                setLoading(false);
            }
        }
        fetchData()
    }, []);
    if (loading) return <div>Loading...</div>

  return(
      <>
          <Characters data={data}/>
      </>
  );
}

export default App
