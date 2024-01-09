import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Search } from './components/Search/Search';
import { BasicLayout } from './layouts/BasicLayout/BasicLayout';
import { StockCard } from './components/StockCard/StockCard';

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
