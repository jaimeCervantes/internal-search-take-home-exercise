import { useEffect, useState } from "react";
import { fetchSearchResults } from "../api";
import type { Data } from '../common.d';

export function useLoadResults(query: string): [boolean, boolean, Data] {
  const [results, setResults] = useState<Data>({});
  const [isChanged, setIsChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isWaiting, setIsWaiting] = useDelay(query, 1000);

  useEffect(() => {
    if (query) {
      setIsWaiting(true);
      setIsChanged(true);
    }
  }, [query]);

  useEffect(() => {
    if(isWaiting === false && isChanged === true && isLoading === false) {
      (async () => {
        setIsLoading(true);
        const result = await fetchSearchResults(query.split(/[\s]+/)) as Data;
        setIsLoading(false);
        setResults(result);
      })();
    }
  }, [isWaiting]);

  return [isWaiting, isLoading, results]
}

export function useDelay(trigger: string, waitTime: number): [boolean, Function] {
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