import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Search } from './components/Search/Search';
import { BasicLayout } from './layouts/BasicLayout/BasicLayout';

function App() {
  return (
    <div className="App">
      <BasicLayout>
        <Search />
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
