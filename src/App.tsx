import SearchField from "./SearchResults/SearchField";
import GridResults from "./SearchResults/GridResults";
import { ChangeEvent, useReducer, useState } from 'react';
import { useLoadResults } from './SearchResults/hooks';
import mapResults from "./SearchResults/mapResults";

import InteractionContext from './SearchResults/SearchResultInteractionsContext';
import reduceSearchResultInteractions from "./SearchResults/reduceSearchResultInteractions";

function App() {
  const store = useReducer(reduceSearchResultInteractions, {});
  const [query, setQuery] = useState('');
  const [isTyping, isLoading, results] = useLoadResults(query);
  const mappedResults = mapResults(results);

  function onSearch(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value.trim());
  }
  
  return (
    <InteractionContext.Provider value={store}>
      <div className="App">
        <SearchField onSearchHandler={onSearch}/>
        {isTyping && 'Typing...' }
        {isLoading && 'Loading...'}
        {mappedResults.length ? <GridResults items={mappedResults} /> : <p>No results</p>}
      </div>
    </InteractionContext.Provider>
  )
}

export default App
