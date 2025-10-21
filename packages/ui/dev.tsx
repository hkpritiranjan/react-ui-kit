import React from "react";
import ReactDOM from "react-dom/client";
import {Button} from './src/components/button'

const App = () => (
  <div style={{ padding: 20 }}>
    <h1>🚀 React UI Kit Playground</h1>
    <p>If you see this, Vite + React is working!</p>
    <Button onClick={() => alert("Primary clicked!")}>Primary Button</Button>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
