import SearchField from "./SearchResults/SearchField";
import GridResults from "./SearchResults/GridResults";
import { ChangeEvent, useReducer, useState } from 'react';
import { useLoadResults } from './SearchResults/hooks';
import mapResults from "./SearchResults/mapResults";

import InteractionContext from './SearchResults/SearchResultInteractionsContext';
import reduceSearchResultInteractions from "./SearchResults/reduceSearchResultInteractions";

function App() {
  const [state, dispatch] = useReducer(reduceSearchResultInteractions, {});
  const [query, setQuery] = useState('');
  const [, isLoading, results] = useLoadResults(query);
  const mappedResults = mapResults(results, state);

  function onSearch(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value.trim());
  }
  
  return (
    <InteractionContext.Provider value={[state, dispatch]}>
      <div className="App">
        <SearchField onSearchHandler={onSearch}/>
        {isLoading && <h2 style={{ marginBottom: '1rem' }}>Loading...</h2>}
        {mappedResults.length ? <GridResults items={mappedResults} /> : null}
        {!isLoading && !mappedResults.length ? <h3>No results</h3>: null}
      </div>
    </InteractionContext.Provider>
  )
}

export default App
