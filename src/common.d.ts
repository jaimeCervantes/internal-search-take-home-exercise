export type DataItem = {
  id?: string,
  matching_terms: Array<string>
}

export type Data = {
  [index: string]: Array<DataItem>
}

export type Results = Data | {};