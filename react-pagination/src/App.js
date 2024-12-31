import React from "react";
import Pagination from "./Pagination";
import info from "./info.json";
import './App.css';

function App() {
  return (
    <div>
      <h1>Country and City Table</h1>
      <Pagination data={info} itemsPerPage={3} />
    </div>
  );
}

export default App;