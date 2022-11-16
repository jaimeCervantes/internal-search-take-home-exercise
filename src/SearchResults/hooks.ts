import { useEffect, useState } from "react";
import { fetchSearchResults } from "../api";
import type { DataItem } from '../common.d';

type Results = Array<DataItem> | [];

export function useLoadResults(query: string): [boolean, boolean, Results] {
  const [results, setResults] = useState<Results>([]);
  const [isChanged, setIsChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isWaiting, setIsWaiting] = useDelay(query, 1000);

  useEffect(() => {
    if(query) {
      setIsWaiting(true);
      setIsChanged(true);
    }
  }, [query]);

  useEffect(() => {
    if(isWaiting === false && isChanged === true) {
      (async () => {
        setIsLoading(true);
        const result = await fetchSearchResults(query.split(/[\s]+/)) as Results;
        setResults(result);
        setIsLoading(false);
      })();
    }
  }, [isWaiting]);

  return [isWaiting, isLoading, results]
}

function useDelay(trigger: string, waitTime: number): [boolean, Function] {
  const [isWating, setIsWaiting] = useState(false);

  useEffect(() => {
    let timeoutId: number = 0;

    if (isWating) {
      timeoutId = setTimeout(() => setIsWaiting(false), waitTime);
    }

    return () => clearTimeout(timeoutId);

  }, [trigger, isWating]);

  return [isWating, setIsWaiting]
}