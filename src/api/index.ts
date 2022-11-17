import contacts from './dummies/contacts.json';
import gdrive from './dummies/gdrive.json';
import images from './dummies/images.json';
import slacks from './dummies/slacks.json';
import tweets from './dummies/tweets.json';

import type { Data } from '../common.d';

const data: Data = {
  ...contacts,
  ...gdrive,
  ...images,
  ...slacks,
  ...tweets,
};

export function fetchSearchResults(searchTerms: Array<string>) {
  return new Promise(resolve => setTimeout(() => resolve(selectData(searchTerms)), 1000));
}

function selectData(searchTerms: Array<string>): Data {
  let results: Data = {};
  const keys: string[] = Object.keys(data);

  keys.forEach((item: string) => {
    const matcheds = data[item].filter(item => {
      for(let i=0; i < searchTerms.length; i++) {
        if(matchTerm(searchTerms[i], item.matching_terms)) {
          return true;
        }
      }

      return false;
    });

    results[item] = matcheds;
  });

  return results;
}


function matchTerm(term: string, values: Array<string>) {
  for (let i = 0; i < values.length; i++) {
    if (values[i].toLowerCase() === term.toLocaleLowerCase()) {
      return true;
    }
  }

  return false;
}

