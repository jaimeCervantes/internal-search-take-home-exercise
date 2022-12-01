import { SearchResultInteractionsProvider } from "../SearchResults/SearchResultInteractionsContext";
import SearchResults from "../SearchResults/SearchResults";
import mapResults from "./mapSearchResults";


function App() {
  return (
    <div className="App">
      <SearchResultInteractionsProvider>
        <SearchResults mapper={mapResults}></SearchResults>
      </SearchResultInteractionsProvider>
    </div>
  );
}

export default App;
