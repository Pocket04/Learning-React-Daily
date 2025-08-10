import {useContext, useState} from "react";
import {UserContext} from "../context/UserContext.jsx";
import '../styles/Home.css'
import {PostContext} from "../context/PostContext.jsx";


function Home() {
    const [post, setPost] = useState("")
    const {posts, addPost} = useContext(PostContext);
    let x = 1;


    function handlePostChange(e){
        setPost(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        addPost(post);
    }
    posts.forEach((post) => console.log(post));

    return(
        <div className="posts">
            <form>
                <textarea id="post" value={post} placeholder="Type your post here..." onChange={handlePostChange}/>
                <button type="submit" onClick={handleSubmit}>Post</button>
            </form>
            <div className="uploaded-posts">
                {posts.map((post, index) => <p key={index}>{index + 1}: {post}</p>)}
            </div>
        </div>
    )
}
export default Home;