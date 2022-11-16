import styles from './GridResults.module.scss';

type GridResultsProps = {
  items: Array<any>
}

export default function GridResults({ items }: GridResultsProps) {
  return (
    <section data-cy="search-results" className={styles.grid}>
      {items.map(item => <div>{JSON.stringify(item)}</div>)}
    </section>
  );
}