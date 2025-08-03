//⚙️ 2. Create a Simple Function Component
// In the same file (or in a new one like App.js), define a function that returns a JSX element.
//
// Import and render this function as a component using JSX syntax. (In App.jsx)
//
// Try changing what it returns — like a greeting or image — and see it update in the browser.

function SimpleFunctionComponent(){
    return(
        <>
            <img
                src={"https://fastly.picsum.photos/id/237/250/250.jpg?hmac=tNmO3YWXALG9JM81cghI9nflo3dWc3e5vlNsf_jmKWw"}
            /> {/* cute doggo pic, cuz why not */}
            {/*<h1>Simple Function Component</h1>*/}
        </>
    )
}

export default SimpleFunctionComponent;