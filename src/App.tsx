import SearchField from "./SearchResults/SearchField";
import GridResults from "./SearchResults/GridResults";
import { ChangeEvent, useState } from 'react';
import { useLoadResults } from './SearchResults/hooks';
import mapResults from "./SearchResults/mapResults";

function App() {
  const [query, setQuery] = useState('');
  const [isTyping, isLoading, results] = useLoadResults(query);

  const mappedResults = mapResults(results);

  function onSearch(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value.trim());
  }
  
  return (
    <div className="App">
      <SearchField onSearchHandler={onSearch}/>
      {isTyping && 'Typing...' }
      {isLoading && 'Loading...'}
      {mappedResults.length ? <GridResults items={mappedResults} /> : <p>No results</p>}
    </div>
  )
}

export default App
