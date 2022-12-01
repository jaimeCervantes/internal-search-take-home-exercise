import { Context, createContext } from 'react';
import { useContext, useReducer } from "react";
import reduceSearchResultInteractions from "./reduceSearchResultInteractions";

const SearchResultInteractions: Context<{}> = createContext([]);

export function SearchResultInteractionsProvider({ children }) {
  const value = useReducer(reduceSearchResultInteractions, {});

  return (
    <SearchResultInteractions.Provider value={value}>
      {children}
    </SearchResultInteractions.Provider>
  );
}

export function useSearchResultInteractionsContext() {
  const context = useContext(SearchResultInteractions);

  if (context === undefined) {
    throw new Error("useSearchResultInteractionsContext must be used as child of a SearchResultInteractionsProvider")
  }

  return context;
}