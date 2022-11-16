import SearchField from "./SearchResults/SearchField";
import GridResults from "./SearchResults/GridResults";
import { ChangeEvent, useState } from 'react';
import { useLoadResults } from './SearchResults/hooks';

function App() {
  const [query, setQuery] = useState('');
  const [isTyping, isLoading, results] = useLoadResults(query);

  function onSearch(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value.trim());
  }
  
  return (
    <div className="App">
      <SearchField onSearchHandler={onSearch}/>
      {isTyping && 'Typing...' }
      {isLoading && 'Loading...'}
      {results.length ? <GridResults items={results} /> : <p>No results</p>}
    </div>
  )
}

export default App
