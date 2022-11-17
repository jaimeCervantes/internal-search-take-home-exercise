export default function reduceSearchResultInteractions(state, action: any) {
  const { type, payload } = action;

  if (type === 'UPDATE_PIN') {
    return { ...state, [payload.id]: payload };
  }

  return state;
}