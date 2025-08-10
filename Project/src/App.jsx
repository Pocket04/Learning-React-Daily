import {useState} from "react";
import {UserContext} from "./context/UserContext.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import './App.css'
import Home from "./components/Home.jsx";
import {PostContext} from "./context/PostContext.jsx";

function App() {
    const [user, setUser] = useState({
        name: "pepega",
        age: 10
    });
    const [posts, setPosts] = useState([]);

    function setAge(age){
        setUser(prev => ({
            ...prev,
            age: age
        }));
    }
    function setName(name){
        setUser(prev => ({
            ...prev,
            name: name
        }));
    }
    function addPost(post){
        setPosts(posts => [...posts, post])
    }

  return(
      <BrowserRouter>
      <UserContext.Provider value={{user, setAge, setName}}>
          <PostContext.Provider value={{posts, addPost}}>
              <NavBar />
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/about"/>
                  <Route path="/contact"/>
              </Routes>
          </PostContext.Provider>
      </UserContext.Provider>
</BrowserRouter>
  );
}

export default App
