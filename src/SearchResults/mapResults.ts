import type { Data, DataItem, Results } from '../common.d';

type MappedResults = Array<DataItem> | [];

export default function mapResults(data: Data): MappedResults {
  let results: MappedResults = [];
  const keys = Object.keys(data);

  keys.forEach((type: string) => {
    const mapped = data[type].map((item: DataItem) => {
      const id = `${item.id || item.timestamp}${type}`;
      return { ...item, id, type,  }
    })
    results = [...results, ...mapped];
  });

  return results;
}