
import './App.css';
import CountriesList from './components/CountriesList';
import Filter from './components/Filter';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
     <Header />
     <Search />
     <Filter />
    < CountriesList />
    </div>
  );
}

export default App;
