import { ChangeEvent, useState, Suspense, useEffect } from 'react';

import SearchField from "./SearchField";
import GridResults from "./GridResults";
import { useDelay } from './hooks';
import { fetchSearchResults } from "../api";

type SearchResource = {
  read: Function;
}

export default function SearchResults({ mapper }: { mapper: Function }) {
  const [query, setQuery] = useState('');
  const [isWaiting,] = useDelay(query, 1000);
  const [asyncResource, setAsyncResource] = useState<SearchResource | null>(null);

  useEffect(() => {
    if(!query || isWaiting) {
      setAsyncResource(null);
      return;
    }

    const resource: { read: Function } = createAsyncResource(fetchSearchResults(query.split(/[\s]+/)));
    setAsyncResource(resource);
  }, [query, isWaiting])


  function onSearch(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value.trim());
  }

  return (
    <>
      <SearchField onSearchHandler={onSearch}/>
      <Suspense fallback={<h3>Loading Results</h3>}>
        { 
          asyncResource ? 
            <GridResults mapper={mapper} asyncResource={asyncResource} />
          :
            <h3>Start a search</h3>
        }
      </Suspense>
    </>
  );
}


function createAsyncResource(promise) {
  let status = 'pending';
  let response = promise.then(
    (res) => {
      status = 'success';
      response = res;
    }, 
    (error) => {
      status = 'error';
      response = error;
    }
  );

  return {
    read() {
      if(status !== 'success') throw response;

      return response;
    }
  }
}