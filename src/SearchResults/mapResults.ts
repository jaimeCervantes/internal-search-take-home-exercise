import type { Data, DataItem } from '../common.d';

type MappedResults = Array<DataItem> | [];

export default function mapResults(data: Data, state: any): MappedResults {
  const noPinneds: MappedResults = [];
  const keys = Object.keys(data);

  keys.forEach((type: string) => {
    data[type].forEach((item: DataItem) => {
      const id = `${item.id || item.timestamp}${type}`;
      const stateOne = state[id];

      if (stateOne && stateOne.isPinned) {
        return;
      }

      noPinneds.push({ ...item, id, type });
    });
  });

  const pinneds = Object.keys(state).map(id => state[id]);

  return [...pinneds, ...noPinneds];
}