import withCard from './Card';
import styles from './Card.module.scss';

export default withCard(Tweet, 'search-result-tweet');

function Tweet(props) {
  return (
    <>
      <h2 className={styles.title}>{props.user}</h2>
      <p>{props.message}</p>
    </>
  );
}