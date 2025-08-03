

// function SmallComponent(){
//
//     return(
//         <h1>Random Small component 2</h1>
//         <p>random text</p>
//     )
//     // Throws error, cuz adjacent JSX elements must be wrapped in an enclosing tag.
//     // so 1 component should return only 1 element(could be a div or an empty element)
//     // You can place multiple html elements within that 1 element, for example a div with multiple <p> tags.
// }

function SmallComponent() {
    return(
        <>
            <h1>Random stuff</h1>
            <p>Random text</p>
        </>
    )
    //works, cuz there is the empty wrapper element/tag <>(anything)</>
    // apparently <></> is called a "fragment"
    // fragments are useful if you want to group elements without adding another html element
    // for example, if u don't need any styling for the container, you'd opt in for a fragment, that's not going to be displayed as html in the DOM.

}


export default SmallComponent;