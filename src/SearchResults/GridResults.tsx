import styles from './GridResults.module.scss';
import ContactCard from './Cards/ContactCard';
import GoogleDriveCard from './Cards/GoogleDriveCard';
import ImageCard from './Cards/ImageCard';
import SlackCard from './Cards/SlackCard';
import TweetCard from './Cards/TweetCard';

type GridResultsProps = {
  items: Array<any>
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

export default function GridResults({ items }: GridResultsProps) {
  return (
    <section data-cy="search-results" className={styles.grid}>
      {
        items.map((item) => {
          const Component = componentNames[item.type];

          return <Component key={`${item.id || item.timestamp}${item.type}`} {...item} />
        })
      }
    </section>
  );
}