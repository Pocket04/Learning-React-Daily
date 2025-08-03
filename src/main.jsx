import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//⚙️ 3. Render Elements with ReactDOM and Function Components
// In your main entry file, manually render an element to the DOM.
//
// Create a simple function component and render it to the DOM.
//
// Nest multiple components to simulate a basic app structure.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/*  <h1>Random Element</h1>*/}
  </StrictMode>,
)
