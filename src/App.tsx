import SearchField from "./SearchResults/SearchField";
import GridResults from "./SearchResults/GridResults";
import { ChangeEvent, useState } from 'react';
import { fetchSearchResults } from "./api";

import type { DataItem } from './common.d';

type Results = Array<DataItem> | [];

function App() {
  const [results, setResults] = useState<Results>([]);
  
  async function onSearch(e: ChangeEvent<HTMLInputElement>) {
    const searchTerm = e.target.value;

    if (searchTerm.trim()) {
      const result = await fetchSearchResults(searchTerm.split(/[\s]+/)) as Results;
      setResults(result);
    }
  }
  

  return (
    <div className="App">
      <SearchField onSearchHandler={onSearch}/>
      {results.length ? <GridResults items={results} /> : <p>No results</p>}
    </div>
  )
}

export default App
