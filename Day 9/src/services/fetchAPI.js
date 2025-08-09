const BASE_URL = "http://127.0.0.1:8080/api/v1"


export async function fetchCharacters(){
    const res = await fetch(`${BASE_URL}/heroes`);
    const data = await res.json();

    return (data)
}