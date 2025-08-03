import './App.css'
import SimpleFunctionComponent from "./components/SimpleFunctionComponent.jsx";
import SmallComponent from "./components/SmallComponent.jsx";

//1. Understand What JSX Is and Why It's Used
// Set up a basic React project (using Create React App or Vite).
//
// Replace the default component content with a simple heading.
//
// Modify the element to other tags (like paragraph or div).
//
// Try writing invalid JSX (like unclosed tags) to observe errors and how React enforces structure.
// Create a variable and display it inside JSX.

// function App() {
//   const randomStuff = "asrhtrberwer"
//
//   return (
//     <>
//       <h2>{{randomStuff}}</h2> // won't render because objects can't be React children, and the second {} marks this element as an object.
//     </>
//   )
// }

// 💡 2. Practice Embedding JavaScript Expressions in JSX
//
// Perform a simple calculation and embed the result.
//
// Define a function that returns a string or number, and render its output.
//
// Try using ternary conditions or simple logic inside JSX braces.

// function App() {
//   const x = 3;
//   const y = 5;
//
//    let sum = 0; // if sum is const, you won't be able to reassign it anywhere(inside the function for example)....duh...
//
//   function addXAndY(x, y) {
//     // return (x + y);
//
//     sum = x + y;
//   }
//   addXAndY(x, y) // the function is void, and assigning a variable outside of it, so we call it before we render the variable.
//   return(
//       <>
//         {/*<h1>{addXAndY(x, y)}</h1> Can't use a void function as a React child.*/}
//         <h1>{sum}</h1>
//       </>
//   )
// }

// Try using ternary conditions or simple logic inside JSX braces.
// Not a big fan of ternary conditions, prefer if(cuz its more readable for my Java trained brain)
// Yes, I know there is ternary condition in Java aswell, but its used mostly for simple return statements.
// I guess this IS a simple return statement. :(

// function App(){
//   const alwaysTrue = true;
//   const alwaysFalse = false;
//
//
//   return(
//       <>
//         {alwaysTrue ? <h1>True, duh</h1> : <h1>False, not gonna happen</h1>}
//       </>
//   );
// }


// Rendering multiple components (still need a wrapper tag, like the fragment here)
function App() {

  return(
      <>
        <h1>Random H1 before component</h1>
        <SimpleFunctionComponent />
        <SmallComponent />
      </>

  );
}

export default App
