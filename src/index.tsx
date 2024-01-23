import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import { Search } from './components/Search/Search';
import { BasicLayout } from './layouts/BasicLayout/BasicLayout';
import { StockCard } from './components/StockCard/StockCard';

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className="App">
      <BasicLayout>
        <Search />
        <StockCard />
      </BasicLayout>

      {/* 

      <StockList>
        <Stock />
        <Stock />
        <Stock />
      </StockList>

      <Footbar /> */}
    </div>
  );
}

export default App;
