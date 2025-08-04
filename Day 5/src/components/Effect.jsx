import {useEffect, useState} from "react";
import '../styles/Effect.css'

const API_URL = "https://jsonplaceholder.typicode.com/posts" //random api

function Effect(){
    const [dependency, setDependency] = useState(1);
    const [loading, setLoading] = useState(true)
    const [user, setuser] = useState([])


    useEffect(() => {
        setLoading(true)
        async function fetchData(){
            try{
                const res = await fetch(`${API_URL}/${dependency}`) // we fetch from the random posts api, and store the response Object, which represents the entire http response, in res variable.
                const data = await res.json(); //parsing the res with the .json() function, so we get the body of the response as a JS object, and we can work with JS on it.
                setuser(data);
            }catch (err){
                alert(err)
            }finally {
                setLoading(false)
            }
        }

        fetchData();
    }, [dependency]); //will re-run the useEffect every time the dependency changes

    return(
        <div className="effect-container">
            <div className="details">
                {loading ? <p>Loading...</p> :
                    <div>
                        <p>{user.id}</p>
                        <hr/>
                        <p>{user.title}</p>
                        <hr/>
                        <p>{user.body}</p>
                    </div>
                }
            </div>
            <button onClick={() => setDependency(d => d + 1)} type="submit">{dependency}</button>
            {/*we change the dependency by clicking the button, which creates another network request, and the data gets re-rendered from the useState change.*/}


            </div>
            );
            }

            export default Effect;