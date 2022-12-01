import styles from './GridResults.module.scss';
import ContactCard from './Cards/ContactCard';
import GoogleDriveCard from './Cards/GoogleDriveCard';
import ImageCard from './Cards/ImageCard';
import SlackCard from './Cards/SlackCard';
import TweetCard from './Cards/TweetCard';
import { useSearchResultInteractionsContext } from './SearchResultInteractionsContext';


type GridResultsProps = {
  asyncResource: { read: Function };
  mapper: Function
}

type CompNames = {
  [index: string]: Function
};

const componentNames: CompNames = {
  contacts: ContactCard,
  gdrive: GoogleDriveCard,
  images: ImageCard,
  slacks: SlackCard,
  tweets: TweetCard
}

export default function GridResults({ asyncResource, mapper }: GridResultsProps) {
  const [pinnedResults, dispatch] = useSearchResultInteractionsContext();
  const items = asyncResource.read();
  const mappedItems = mapper(items, pinnedResults);

  function updatePin(props: any, isPinned: boolean) {
    const payload = { ...props, isPinned };
    delete payload.updatePin;

    dispatch({
      type: 'UPDATE_PIN',
      payload
    })
  }

  return (
    <>
      {mappedItems.length ? <GridResultList items={mappedItems} updatePin={updatePin} /> : null}
        
      {!mappedItems.length ? <h3>No results</h3>: null}
    </>
  );
}


function GridResultList({ items, updatePin }) {
  return (
    <section data-cy="search-results" className={styles.grid}>
      {
        items.map((item) => {
          const Component = componentNames[item.type];

          return <Component key={item.id} updatePin={updatePin} {...item } />
        })
      }
    </section>
  );
}